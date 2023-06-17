const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, './dist'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'postcss-loader',
        ],
      },
    ],
  },
};