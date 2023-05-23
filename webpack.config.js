const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  watchOptions: {
    aggregateTimeout: 1000, // Delay before rebuilding in milliseconds
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: 'index.html',
    }),
  ]
};
