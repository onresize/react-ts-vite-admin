import { useState } from 'react'
import { Avatar, Modal, Menu, Dropdown, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HOME_URL } from '@/config/config'
import { removeToken } from '@/utils/authCookie'
import avatar from '@/assets/images/avatar.png'
import useStore from '@/mobx/index'

const style = {
  margin: '0 30px 0 6px',
}

const AvatarIcon = (_props: any) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { header } = useStore()

  const onOk = () => {
    removeToken()
    message.success(t('header.loginOutSuccess'))
    header.resetState()
    navigate('/login')
    setOpen(false)
  }

  // Dropdown Menu
  const items = [
    {
      key: '1',
      label: <span className="dropdown-item">{t('header.home')}</span>,
      onClick: () => navigate(HOME_URL),
      disabled: pathname === HOME_URL ? true : false,
    },
    {
      key: '2',
      label: <span className="dropdown-item">{t('header.logout')}</span>,
      onClick: () => setOpen(true),
    },
  ]

  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
        <Avatar size="default" src={avatar} {...{ style }} />
      </Dropdown>
      <Modal
        title={t('header.loginOutSuccess') + '🧡'}
        open={open}
        onOk={onOk}
        onCancel={() => setOpen(false)}
        okText={t('header.ok')}
        cancelText={t('header.cancel')}
        width={350}
      >
        {t('header.isSureLoginOut')}
      </Modal>
    </>
  )
}

export default AvatarIcon
