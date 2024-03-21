module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'buildBundle', '.eslintrc.cjs', 'postcss.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'prefer-const': 0, // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/exhaustive-deps': 0, // 关闭hooks警告
    '@typescript-eslint/no-unused-vars': 0, // 关闭定义未使用警告
    '@typescript-eslint/no-explicit-any': 0, // 关闭any类型警告
    '@typescript-eslint/no-var-requires': 0, // 关闭require语句不是import语句的警告
    '@typescript-eslint/no-empty-function': 0, // 关闭禁止空函数
    '@typescript-eslint/no-use-before-define': 0, // 关闭禁止在变量定义之前使用它们
    '@typescript-eslint/explicit-module-boundary-types': 0, // 要求导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/ban-ts-comment': 0, // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
  },
}
