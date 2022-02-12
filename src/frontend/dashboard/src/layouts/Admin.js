import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { Tabs, Layout } from 'antd';
import './admin.css';
import { Sidebar, Footer, Icons, NavbarActions } from '../components'
import Base from '../pages/base'
import { factoryForPage } from '../utils/factory'
import { setPages, setActiveTabId, setInitialValues, addNewPage, getRoutes } from '../redux/slices/admin';

var createUniqueId = require('lodash/uniqueId');

const Admin = () => {
  const DASHBOARD_ID = 1;
  const { pages, routes, activeTabId } = useSelector(state => state.admin);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getRoutes());
  }, [])

  useEffect(() => {
    if (pages.length == 0 && routes.length > 0) {
      let uniqueId = createUniqueId();
      let dashboardRoute = { ...routes.find(x => x.id == DASHBOARD_ID), uniqueId };
      dispatch(addNewPage(dashboardRoute));
      history.push(dashboardRoute.layout + dashboardRoute.path);
    } else {
      let newPage = pages.find(x => x.uniqueId == activeTabId);
      newPage && history.push(newPage.layout + newPage.path);
    }

  }, [history, activeTabId, routes]);

  //#region tab events

  const tabOnChange = tabId => {
    if (tabId != activeTabId) {
      dispatch(setActiveTabId(tabId));
    }
  }

  const tabOnEdit = (tabId, action) => {
    if (action == "remove") {
      removeTab(tabId);
    } else {
      throw new Error("unknown action")
    }
  }

  const removeTab = tabId => {
    let lastIndex;
    pages.forEach((page, i) => {
      if (page.uniqueId === tabId) {
        lastIndex = i - 1;
      }
    });
    const newPages = pages.filter(page => page.uniqueId !== tabId);
    let newTabId = activeTabId;
    if (newPages.length && activeTabId === tabId) {
      if (lastIndex >= 0) {
        newTabId = newPages[lastIndex].uniqueId;
      } else {
        newTabId = newPages[0].uniqueId;
      }
    }
    dispatch(setPages(newPages));
    dispatch(setActiveTabId(newTabId));
  }

  const onValuesChange = (uniqueId, initialValues) => {
    dispatch(setInitialValues({ uniqueId, initialValues }))
  }

  const searchOnSelect = (route) => {
    let uniqueId = createUniqueId();
    let newPage = { ...route, uniqueId: uniqueId };
    dispatch(addNewPage(newPage));
  }

  //#endregion

  const getPage = () => {
    var route = pages.find(x => x.uniqueId == activeTabId)
    if (route) {
      return <Route exact={route.exact} path={route.layout + route.path}
        render={(props) => <Base route={props} page={route} onValuesChange={onValuesChange}>{factoryForPage(route.component)}</Base>}
        key={route.uniqueId} />;
    } else {
      return <Redirect from="/" to="/admin/" />
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout" >
        <Tabs
          hideAdd
          onChange={tabOnChange}
          activeKey={(activeTabId).toString()}
          type="editable-card"
          onEdit={tabOnEdit}
          className="site-layout-background"
          tabBarExtraContent={<NavbarActions searchOnSelect={searchOnSelect} routes={routes} />}
          tabBarStyle={{ margin: "0px", height: "50px" }}>
          {pages.filter(x => !x.hide).map(route => (
            <Tabs.TabPane closable={!route.closable} tab={<span><Icons type={route.icon} />{route.title}</span>} key={route.uniqueId} />
          ))}
        </Tabs>
        <Switch>
          {getPage()}
        </Switch>
        <Footer />
      </Layout>
    </Layout >
  )
}

export default Admin;