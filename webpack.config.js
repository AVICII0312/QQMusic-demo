const path = require('path')
module.exports = {
    entry:  './scripts/app.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'dist'), // 必须使用绝对地址，输出文件夹
      filename: "app.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
  }