import { Layout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import TextAlign from './components/TextAlign'
import ComponentSize from './components/ComponentSize'
import Language from './components/Language'
import Fullscreen from './components/Fullscreen'
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
        <TextAlign />
        <ComponentSize />
        <Language />
        <Fullscreen />
      </div>
    </Header>
  )
}

export default LayoutHeader
