import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Spin } from 'antd'
import type { MenuProps } from 'antd'
import classnames from 'classnames'
import * as Icons from '@ant-design/icons'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { getOpenKeys } from '@/utils/utils'
import './index.less'
import { menuArr } from '@/api/localRoutes.json'

const LayoutMenu: React.FC = (_props: any) => {
  const { pathname } = useLocation()
  const [selectKeys, setSelectKeys] = useState<string[]>([pathname]) // 指定高亮选中
  const [openKeys, setOpenKeys] = useState<string[]>([]) // 指定展开项

  // 刷新页面保持高亮
  useEffect(() => {
    setSelectKeys([pathname])
    setOpenKeys(getOpenKeys(pathname))
  }, [pathname])

  // 设置当前展开 subMenu
  const menuOpenChange = (openKeys: string[]) => {
    console.log('openKeys:', openKeys)
    if (openKeys?.length === 0 || openKeys?.length === 1) {
      return setOpenKeys(openKeys)
    }
    // @ts-ignore
    setOpenKeys(openKeys.at(-1))
  }

  // 定义 menu 类型
  type MenuItem = Required<MenuProps>['items'][number]
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }

  // 动态渲染 ICON
  const customIcons: { [key: string]: any } = Icons
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name])
  }

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (
    menuData: Menu.MenuOptions[],
    newArr: MenuItem[] = []
  ) => {
    menuData.forEach((item: Menu.MenuOptions) => {
      if (!item?.children?.length) {
        return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)))
      }
      newArr.push(
        getItem(
          item.title,
          item.path,
          addIcon(item.icon!),
          deepLoopFloat(item.children)
        )
      )
    })
    return newArr
  }

  // 获取菜单列表并处理成 antd menu 需要的格式
  const [loading, setLoading] = useState(false)
  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const getMenuData = () => {
    try {
      setLoading(true)
      const deepMenuArr = deepLoopFloat(menuArr)
      console.log('最终的menuList：', deepMenuArr)
      setMenuList(deepMenuArr)
    } finally {
      setLoading(false)
    }
  }

  const [bool, setBool] = useState(false)
  const listenWindow = () => {
    window.onresize = () => {
      const screenWidth = document.body.clientWidth
      screenWidth <= 950 ? setBool(true) : setBool(false)
    }
  }

  const navigate = useNavigate()
  const menuItemClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  useEffect(() => {
    listenWindow()
    getMenuData()
  }, [])

  return (
    // <div className={classnames('menu', { menuHeight: bool })}>
    <div className={`menu ${bool && 'menuHeight'}`}>
      <Spin spinning={loading}>
        <Menu
          theme="dark"
          mode="inline"
          triggerSubMenuAction="click"
          items={menuList}
          selectedKeys={selectKeys}
          openKeys={openKeys}
          onOpenChange={menuOpenChange}
          onClick={menuItemClick}
        ></Menu>
      </Spin>
    </div>
  )
}

export default LayoutMenu
