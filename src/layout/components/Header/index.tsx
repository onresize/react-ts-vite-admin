import { Layout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import Fullscreen from './components/Fullscreen'
import Language from './components/Language'
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
      </div>
      <div className="header-ri">
        <Language />
        <Fullscreen />
      </div>
    </Header>
  )
}

export default LayoutHeader
