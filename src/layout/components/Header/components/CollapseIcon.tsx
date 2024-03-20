import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'

const CollapseIcon = observer((props: any) => {
  const { header } = useStore()

  return (
    <div
      className="collapsed"
      onClick={() => {
        header.updateCollapse(!header.isCollapse)
      }}
    >
      {header.isCollapse ? (
        <MenuUnfoldOutlined id="isCollapse" />
      ) : (
        <MenuFoldOutlined id="isCollapse" />
      )}
    </div>
  )
})

export default CollapseIcon
