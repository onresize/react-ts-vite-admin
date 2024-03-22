import { Drawer, Divider, Switch, theme } from 'antd'
import { useState } from 'react'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'
import SwitchDark from '@/components/SwitchDark'
import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'

const Theme = observer((props: any) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { setThemeConfig, updateCollapse } = props
  const { header } = useStore()

  const {
    // @ts-ignore
    token: { colorBgContainer, themeStyle },
  } = theme.useToken()

  const style = {
    color: themeStyle.fontColor,
  }

  const onChange = () => {}

  return (
    <>
      <i
        className="icon-style iconfont icon-zhuti"
        onClick={() => {
          setVisible(true)
        }}
      ></i>
      <Drawer
        title="布局设置"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        width={320}
        style={{ borderLeft: '1px solid #4e4e4e' }}
      >
        {/* 全局主题 */}
        <Divider className="divider">
          <FireOutlined />
          <span>全局主题</span>
        </Divider>
        <div className="theme-item">
          <span {...{ style }}>暗黑模式</span>
          <SwitchDark />
        </div>
        <br />
        {/* 界面设置 */}
        <Divider className="divider">
          <SettingOutlined />
          <span>界面设置</span>
        </Divider>
        <div className="theme-item">
          <span {...{ style }}>折叠菜单</span>
          <Switch
            checked={header.isCollapse}
            onChange={(e) => header.updateCollapse(e)}
          />
        </div>
        <div className="theme-item">
          <span {...{ style }}>面包屑导航</span>
          <Switch
            checked={header.breadcrumb}
            onChange={(e) => header.setBreadcrumb(e)}
          />
        </div>

        {/* <div className="theme-item">
          <span>标签栏</span>
          <Switch
            checked={!tabs}
            onChange={(e) => {}}
          />
        </div> */}

        <div className="theme-item">
          <span {...{ style }}>页脚</span>
          <Switch
            checked={header.footer}
            onChange={(e) => header.setFooter(e)}
          />
        </div>
      </Drawer>
    </>
  )
})

export default Theme
