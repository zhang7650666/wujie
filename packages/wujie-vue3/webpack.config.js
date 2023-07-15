const { Configuration } = require('webpack')
const path = require('path')

/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: 'none',
  entry: {
    main: './src/index.ts'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib')
  },
  module: {
    rules:[
      {
        test: /\.ts$/,
        use: 'swc-loader'
      }
    ]
  },
  externals: ['vue', 'wujie']
}


module.exports = config
