const path = require('path');
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin.js')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'StripEnterLoader.js'
          }
        ]
      }
    ]
  },
  plugins: [
    new HelloWorldPlugin()
  ]
};
