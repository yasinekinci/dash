import React from 'react'
import { Layout } from 'antd';

const Header = ({ children }) => {
 return (
  <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
   {children}
  </Layout.Header>
 )
}

export default Header
