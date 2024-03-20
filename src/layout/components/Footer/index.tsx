import './index.less'

const LayoutFooter = (props: any) => {
  const { themeConfig } = props
  return (
    <>
      {!themeConfig?.footer && (
        <div className="footer">
          <a href="#" target="_blank" rel="noreferrer">
            2024 © react_ts_vite_admin.
          </a>
        </div>
      )}
    </>
  )
}

export default LayoutFooter
