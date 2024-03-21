import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import LayoutTabs from './components/Tabs'
import LayoutFooter from './components/Footer'
import './index.less'

const LayoutIndex: React.FC = observer((_props: any) => {
  const { Sider, Content } = Layout
  const { header } = useStore()

  return (
    <section className="container">
      <Sider
        trigger={null}
        collapsed={header.isCollapse}
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
})

export default LayoutIndex
