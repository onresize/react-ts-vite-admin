import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import LayoutTabs from './components/Tabs'
import LayoutFooter from './components/Footer'
import './index.less'

function LayoutIndex(props: any) {
  const { Sider, Content } = Layout

  return (
    <section className="container">
      <Sider
        trigger={null}
        collapsed={props.isCollapse}
        width={220}
        theme="dark"
      >
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        {/* <LayoutTabs></LayoutTabs> */}
        <Content>
          <Outlet></Outlet>
        </Content>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </section>
  )
}

export default LayoutIndex
