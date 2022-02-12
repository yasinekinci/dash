import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button, Row, Col, Space, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import BreadcrumbComponent from 'components/Breadcrumb';
import Icons from 'components/Icons';
import proxyExecute from 'proxy';
var _mapValues = require('lodash/mapValues');
var _groupBy = require('lodash/groupBy');
var _omit = require('lodash/omit');

const PageHeaderComponent = ({ ...routeInfo }) => {
    const [pageInfo, setPageInfo] = useState({});

    useEffect(() => {
        proxyExecute({ method: "routes" }).then(result => {
            let page = result.data.find(x => x.layout == routeInfo.layout && x.path == routeInfo.path)
            setPageInfo(page);
        })

    }, [routeInfo.layout, routeInfo.path])

    const getActionList = () => {
        let content = [];
        if (pageInfo && pageInfo.actions && pageInfo.actions.length > 0) {

            pageInfo.actions.filter(x => !x.groupId).forEach((x, i) => {
                content.push(<Button key="1" type="primary" htmlType="submit" key={i} icon={<Icons type={x.icon} />}>{x.name}</Button>);
            });

            var grouped = _mapValues(_groupBy(pageInfo.actions.filter(x => x.groupId != null), 'groupId'),
                clist => clist.map(action => _omit(action, 'groupId')));

            if (grouped && Object.keys(grouped).length > 0) {
                Object.keys(grouped).forEach(key => {
                    let group = grouped[key];
                    content.push(DropdownMenu(group))
                })
            }

            return content;
        }
    }

    const DropdownMenu = (info) => {
        let menu = (<Menu>
            {info.map((x, i) => {
                return <Menu.Item key={i}>
                    <Typography.Link>{x.name}</Typography.Link>
                </Menu.Item>
            })}
        </Menu>
        );
        return <Dropdown key="more" overlay={menu}>
            <Button style={{ border: 'none', padding: 0, }}>
                <EllipsisOutlined
                    style={{
                        fontSize: 20,
                        verticalAlign: 'top',
                    }}
                />
            </Button>
        </Dropdown>
    }

    const isVisibleBreadcrumb = () => {
        if (pageInfo && pageInfo.hasOwnProperty("isVisibleBreadcrumb")) {
            return pageInfo.isVisibleBreadcrumb;
        }
        return true;
    }

    const isVisiblePageHeader = () => {
        if (pageInfo && pageInfo.hasOwnProperty("isVisiblePageHeader")) {
            return pageInfo.isVisiblePageHeader;
        }
        return true;
    }

    return (
        isVisiblePageHeader() && <Row align="middle" style={{ padding: '16px 16px', backgroundColor: "#f7f7f7" }}>
            <Col span={20}>
                {isVisibleBreadcrumb() && <BreadcrumbComponent />}
            </Col>
            <Col span={4} align="end">
                <Space size={"middle"}>
                    {getActionList() || <Button />}
                </Space>
            </Col>
        </Row>
    )
}

export default PageHeaderComponent
