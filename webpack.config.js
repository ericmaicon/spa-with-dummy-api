var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  }
};