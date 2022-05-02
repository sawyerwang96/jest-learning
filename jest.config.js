// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest'
// }

module.exports = {
  moduleFileExtensions: [
    // 匹配文件后缀
    'js',
    'jsx',
    'json',
    // tell Jest to handle *.vue files
    'vue'
  ],
  transform: {
    // 模块化处理
    // process *.vue files with vue-jest
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
    require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  },
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    // 模块映射
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  // serializer for snapshots
  snapshotSerializers: [
    // 快照格式化
    'jest-serializer-vue'
  ],
  testMatch: [
    // npm run test:unit 查找测试文件
    // '**/tests/unit/**/*.(spec|test).[jt]s?(x)',
    '**/__tests__/**/*.[jt]s?(x)'
  ],
  // https://github.com/facebook/jest/issues/6766
  // js-dom 模拟浏览器环境的地址
  testURL: 'http://localhost/',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname')
  ]
}
