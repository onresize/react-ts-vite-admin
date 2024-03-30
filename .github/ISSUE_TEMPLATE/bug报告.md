name: bug报告
description: 创建一个报告来帮助这个项目改进
title: "[错误报告]"
labels:

- bug
  assignees: onresize
  body:
- type: input
  id: package
  attributes:
  label: 包名
  description: 您报告的是哪个包名
  value: react-ts-vite-admin
  placeholder: 包名
  validations:
  required: true

- type: checkboxes
  id: operating-systems
  attributes:
  label: 您使用哪个操作系统?
  description: 您可以选择多个. 如果与环境无关, 请勿选择任何内容.
  options: - label: macOS - label: Windows - label: Linux

- type: markdown
  attributes:
  value: | ## 描述错误

      > 如果适用, 请添加屏幕截图和日志以帮助解释您的问题.

- type: textarea
  id: description
  attributes:
  label: 描述错误
  description: 对错误内容的清晰简洁的描述.
  validations:
  required: true

- type: textarea
  id: additional-context
  attributes:
  label: 额外的背景信息
  description: 如果您没有报告明显的内容, 则需要最小的复制存储库和相关日志.
  placeholder: 在此处添加有关该问题的任何其他上下文. 特别是在某些操作系统、浏览器或配置中会出现的问题.
