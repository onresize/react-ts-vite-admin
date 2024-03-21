import { Layout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import BreadcrumbNav from './components/BreadcrumbNav'
import TextAlign from './components/TextAlign'
import ComponentSize from './components/ComponentSize'
import Language from './components/Language'
import Theme from './components/Theme'
import Fullscreen from './components/Fullscreen'
import AvatarIcon from './components/AvatarIcon'
import './index.less'

const LayoutHeader = () => {
  const { Header } = Layout

  return (
    <Header
      style={{
        padding: 0,
        height: '55px',
        background: '#ffffff',
      }}
    >
      <div className="header-lf">
        <CollapseIcon />
        <BreadcrumbNav />
      </div>
      <div className="header-ri">
        <TextAlign />
        <ComponentSize />
        <Language />
        <Theme />
        <Fullscreen />
        <AvatarIcon />
      </div>
    </Header>
  )
}

export default LayoutHeader
