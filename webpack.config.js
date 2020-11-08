const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {app: './src/app.js', sub: './src/sub.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules : [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
      {
        test:  /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|svg|png|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}