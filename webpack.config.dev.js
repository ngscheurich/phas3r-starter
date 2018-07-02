const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Phaser 3 Game' }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'assets', '**', '*'), to: '.' },
    ]),
  ],
  devServer: {
    contentBase: path.relative(__dirname, '/'),
    port: 8080,
  },
}
