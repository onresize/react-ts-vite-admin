import React from 'react'
import { Button, Tooltip } from 'antd'
import Icon from '@ant-design/icons'
import useStore from '@/mobx/index'
import { observer } from 'mobx-react-lite'
import type { GetProps } from 'antd'

type CustomIconComponentProps = GetProps<typeof Icon>

const LtrCom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="19"
    height="19"
    viewBox="0 0 1024 1024"
    fill="currentColor"
  >
    <path
      fill="#000"
      d="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z"
    ></path>
  </svg>
)

const RtlCom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="19"
    height="19"
    viewBox="0 0 1024 1024"
    fill="currentColor"
  >
    <path
      fill="#000"
      d="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z"
    ></path>
  </svg>
)

const LtrIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LtrCom} {...props} />
)

const RtlIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={RtlCom} {...props} />
)

const TextAlign: React.FC = observer(() => {
  const { header } = useStore()

  const onHandClick = () => {
    header.direction == 'ltr'
      ? header.setDirection('rtl')
      : header.setDirection('ltr')
  }

  return (
    <Tooltip placement="bottom" title={header.direction.toLocaleUpperCase()} fresh={true}>
      <div className="icon-style" onClick={onHandClick}>
        {header.direction == 'ltr' ? <LtrIcon /> : <RtlIcon />}
      </div>
    </Tooltip>
  )
})

export default TextAlign
