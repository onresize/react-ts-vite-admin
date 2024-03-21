import { Spin } from 'antd'
import './index.less'

const Loading = ({ tip = '' }: { tip?: string }) => {
  return (
    <Spin tip={tip} size="large" className="request-loading">
      <></>
    </Spin>
  )
}

export default Loading
