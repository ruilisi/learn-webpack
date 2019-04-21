const path = require('path');

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
            loader: 'strip-enter-loader.js'
          }
        ]
      }
    ]
  }
};
