import { observer } from 'mobx-react-lite'
import useStore from '@/mobx/index'
import './index.less'

const LayoutFooter = observer((props: any) => {
  const { header } = useStore()
  return (
    <>
      {header.footer && (
        <div className="footer">
          <a href="#" target="_blank" rel="noreferrer">
            2024 © react_ts_vite_admin.
          </a>
        </div>
      )}
    </>
  )
})

export default LayoutFooter
