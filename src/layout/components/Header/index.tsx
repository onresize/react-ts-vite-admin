import { Layout } from 'antd'
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
    ></Header>
  )
}

export default LayoutHeader
