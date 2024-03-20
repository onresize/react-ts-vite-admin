import { Dropdown, Menu } from 'antd'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'

const Language = observer((_props: any) => {
  const { header } = useStore()

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span>简体中文</span>,
          onClick: () => header.setLanguage('zh'),
          disabled: header.language === 'zh',
        },
        {
          key: '2',
          label: <span>English</span>,
          onClick: () => header.setLanguage('en'),
          disabled: header.language === 'en',
        },
      ]}
    />
  )

  return (
    <Dropdown
      overlay={menu}
      placement="bottom"
      trigger={['click']}
      arrow={true}
    >
      <i className="icon-style iconfont icon-zhongyingwen"></i>
    </Dropdown>
  )
})

export default Language
