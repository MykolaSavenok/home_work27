const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
//const MiniCssExtractPlugin = require('');

module.exports = {
   entry: '/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index-[fullhash].js',
      clean: true
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'img'),
               to: path.resolve(__dirname, 'dist/img')
            }
         ]
      })
   ],
   devServer: {
      port: 5555,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },
   module: {
      rules: [
         {
            test: /\.sass$/,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader"
            ]
         },
         {
            test: /\.css$/,
            use: [
               "style-loader",
               "css-loader"
            ]
         }
      ]
   }
};