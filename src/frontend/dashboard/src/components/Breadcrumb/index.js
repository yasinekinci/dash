import React from 'react'
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from 'utils/helper'

const BreadcrumbComponent = ({ style }) => {
    const history = useLocation();
    const routes = history.pathname.split('/').filter(x => x != '').map((x, i) => { return { key: i, path: x, breadcrumbName: x } });

    return <Breadcrumb style={style}>
        {routes.map((x) => {
            return <Breadcrumb.Item key={x.key}>
                <span>{capitalizeFirstLetter(x.breadcrumbName)}</span>
            </Breadcrumb.Item>
        })}
    </Breadcrumb>
}

export default BreadcrumbComponent
