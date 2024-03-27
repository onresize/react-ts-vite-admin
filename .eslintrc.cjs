module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'buildBundle', '.eslintrc.cjs', 'lint-staged.config.cjs', '.stylelintrc.cjs', '.prettierrc.cjs', 'postcss.config.cjs'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['react-refresh'],
  globals: {
    Component: true, // 注册组件
    Behavior: true, // 注册行为
    requirePlugin: true, // 引入插件
    postMessage: true, // 向 Worker 线程发送消息
    onmessage: true, // 监听 Worker 线程的消息
    self: true, // Worker 线程全局对象
    importScripts: true, // 引入第三方库
    onerror: true, // 监听错误
    onmessageerror: true, // 监听 Worker 线程消息错误
    close: true, // 关闭 Worker 线程
    open: true, // 创建 Worker 线程
    XMLHttpRequest: true, // ajax
    FormData: true, // ajax
    FileReader: true, // ajax
    setInterval: true, // 定时器
    setTimeout: true, // 定时器
    clearInterval: true, // 定时器
    clearTimeout: true, // 定时器
    Image: true, // 图片
    Audio: true, // 音频
    WebSocket: true, // WebSocket
    IntersectionObserver: true, // 监听节点是否进入屏幕可视区域
    Promise: true, // Promise
  },
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-console': 'off', // 允许使用console
    'no-debugger': 'off', // 允许使用debugger
    'no-unused-vars': 'off', // 允许声明未使用变量
    'no-undef': 'off', // 允许使用未定义变量
    'no-irregular-whitespace': 'off', // 允许使用不规则的空白符
    'no-mixed-spaces-and-tabs': 'off', // 允许混用tab和空格
    'no-tabs': 'off', // 允许使用tab
    'no-trailing-spaces': 'off', // 允许行尾有空白
    'no-multiple-empty-lines': 'off', // 允许多行空白
    'no-prototype-builtins': 'off', // 允许使用hasOwnProperty
    'no-async-promise-executor': 'off', // 允许使用异步函数作为Promise执行器
    'no-useless-escape': 'off', // 允许使用无用的转义符
    'no-useless-catch': 'off', // 允许使用无用的catch
    'no-constant-condition': 'off', // 允许使用常量作为判断条件
    'no-empty': 'off', // 允许空的代码块
    'no-unsafe-finally': 'off', // 允许在finally中使用控制流语句
    'no-throw-literal': 'off', // 允许抛出字面量错误
    'no-sequences': 'off', // 允许使用逗号操作符
    'no-unreachable': 'off', // 允许在return、throw、continue和break语句后出现不可达代码
    'no-unsafe-negation': 'off', // 允许对关系运算符的左操作数使用否定操作符
    'no-unsafe-optional-chaining': 'off', // 允许使用不安全的可选链
    'no-unused-expressions': 'off', // 允许使用未使用的表达式
    'no-useless-backreference': 'off', // 允许使用无用的反向引用
    'no-unsafe-regex': 'off', // 允许使用无效的正则表达式
    'no-regex-spaces': 'off', // 允许正则表达式中使用多个空格
    'no-empty-character-class': 'off', // 允许在正则表达式中使用空字符集
    'no-control-regex': 'off', // 允许在正则表达式中使用控制字符
    'no-else-return': 'off', // 允许在else代码块中return
    'no-empty-pattern': 'off', // 允许解构中出现空的模式
    'no-extra-boolean-cast': 'off', // 允许不必要的布尔类型转换
    'no-extra-semi': 'off', // 允许不必要的分号
    'no-extra-parens': 'off', // 允许不必要的括号
    'no-extra-bind': 'off', // 允许不必要的函数绑定
    'no-extra-label': 'off', // 允许不必要的标签
    'no-extra-boolean-cast': 'off', // 允许不必要的布尔类型转换
    'prefer-const': 0, // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/exhaustive-deps': 0, // 关闭hooks警告
    "@typescript-eslint/no-namespace": 0,
    '@typescript-eslint/no-unused-vars': 0, // 关闭定义未使用警告
    '@typescript-eslint/no-explicit-any': 0, // 关闭any类型警告
    '@typescript-eslint/no-var-requires': 0, // 关闭require语句不是import语句的警告
    '@typescript-eslint/no-empty-function': 0, // 关闭禁止空函数
    '@typescript-eslint/no-use-before-define': 0, // 关闭禁止在变量定义之前使用它们
    '@typescript-eslint/explicit-module-boundary-types': 0, // 要求导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/ban-ts-comment': 0, // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
  },
}
