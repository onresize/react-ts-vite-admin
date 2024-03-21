import { Avatar, Modal, Menu, Dropdown, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { removeToken } from '@/utils/authCookie'
import avatar from '@/assets/images/avatar.png'

const style = {
  margin: '0 30px 0 6px',
}

const AvatarIcon = (_props: any) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        removeToken()
        message.success('退出登录成功！')
        navigate('/login')
      },
    })
  }

  // Dropdown Menu
  const items = [
    {
      key: '1',
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate(HOME_URL),
      disabled: pathname === HOME_URL ? true : false,
    },
    {
      key: '2',
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
      <Avatar size="default" src={avatar} {...{ style }} />
    </Dropdown>
  )
}

export default AvatarIcon
