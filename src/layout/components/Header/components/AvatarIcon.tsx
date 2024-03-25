import { useState } from 'react'
import { Avatar, Modal, Menu, Dropdown, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { HOME_URL } from '@/config/config'
import { removeToken } from '@/utils/authCookie'
import avatar from '@/assets/images/avatar.webp'
import useStore from '@/mobx/index'

const style = {
  margin: '0 30px 0 6px',
}

const AvatarIcon = (_props: any) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { formatMessage: t } = useIntl()
  const { header } = useStore()

  const onOk = () => {
    removeToken()
    message.success(t({ id: 'header.loginOutSuccess' }))
    header.resetState()
    navigate('/login')
    setOpen(false)
  }

  // Dropdown Menu
  const items = [
    {
      key: '1',
      label: <span className="dropdown-item">{t({ id: 'header.home' })}</span>,
      onClick: () => navigate(HOME_URL),
      disabled: pathname === HOME_URL ? true : false,
    },
    {
      key: '2',
      label: (
        <span className="dropdown-item">{t({ id: 'header.logout' })}</span>
      ),
      onClick: () => setOpen(true),
    },
  ]

  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
        <Avatar size="default" src={avatar} {...{ style }} />
      </Dropdown>
      <Modal
        title={t({ id: 'header.loginOutSuccess' }) + '🧡'}
        open={open}
        onOk={onOk}
        onCancel={() => setOpen(false)}
        okText={t({ id: 'header.ok' })}
        cancelText={t({ id: 'header.cancel' })}
        width={350}
      >
        {t({ id: 'header.isSureLoginOut' })}
      </Modal>
    </>
  )
}

export default AvatarIcon
