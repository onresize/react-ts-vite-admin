module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'buildBundle', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/exhaustive-deps': 0, // 关闭hooks警告
    '@typescript-eslint/no-unused-vars': 'off', // 关闭定义未使用警告
    '@typescript-eslint/no-explicit-any': ['off'], // 关闭any类型警告
    '@typescript-eslint/no-var-requires': 'off', // 关闭require语句不是import语句的警告
    '@typescript-eslint/no-empty-function': 'off', // 关闭禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 关闭禁止在变量定义之前使用它们
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
  },
}
