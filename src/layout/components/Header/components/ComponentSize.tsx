import { useTranslation } from 'react-i18next'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import { Dropdown, Menu } from 'antd'

const ComponentSize = observer((_props: any) => {
  const { header } = useStore()
  const { t } = useTranslation()

  // 切换组件大小
  const onClick = ({ key }: { key: string }) => {
    header.setComponentSize(key)
  }

  const items = [
    {
      key: 'middle',
      disabled: header.componentSize == 'middle',
      label: <span>{t('header.info')}</span>,
    },
    {
      disabled: header.componentSize == 'large',
      key: 'large',
      label: <span>{t('header.large')}</span>,
    },
    {
      disabled: header.componentSize == 'small',
      key: 'small',
      label: <span>{t('header.small')}</span>,
    },
  ]

  const menuProps = {
    items,
    onClick,
  }

  return (
    <Dropdown
      menu={menuProps}
      placement="bottom"
      trigger={['click']}
      arrow={true}
    >
      <i className="icon-style iconfont icon-contentright"></i>
    </Dropdown>
  )
})

export default ComponentSize
