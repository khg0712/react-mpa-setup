const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  output: {
    path: path.resolve(__dirname, "/"),
    filename: "[name].[hash].js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./A.html",
      chunks: ['A', 'vendors', '[id].css', 'polyfill', 'runtime', 'reset']
    }),
    new HtmlWebpackPlugin({
      filename: './B.html',
      template: 'public/index.html',
      chunks: ['B', 'vendors', '[id].css', 'polyfill', 'runtime', 'reset']
    }),
    new HtmlWebpackPlugin({
      filename: './C.html',
      template: 'public/C.html',
      chunks: ['C', 'vendors', '[id].css', 'polyfill', 'runtime', 'reset']
    }),
    new HtmlWebpackPlugin({
      filename: './D.html',
      template: 'public/C.html',
      chunks: ['D', 'vendors', '[id].css', 'polyfill', 'runtime', 'reset']
    }),
    new MiniCssExtractPlugin({
      filename: "static/[name].css",
      chunkFilename: "[id].css"
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
  devtool: 'cheap-eval-source-map'
};
