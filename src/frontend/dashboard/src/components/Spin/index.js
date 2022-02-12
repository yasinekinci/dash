import React from 'react'
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

const SpinComponent = ({ children }) => {
    var { loading } = useSelector(state => state.proxy);
    return (
        <Spin spinning={loading} delay={500} className="spin">
            {children}
        </Spin>
    )
}

export default SpinComponent;
