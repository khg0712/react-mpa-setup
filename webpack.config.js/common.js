const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    polyfill: ["@babel/polyfill"],
    A: "./src/react/A.tsx",
    B: "./src/react/B.tsx",
    C: "./src/no_react/C.ts",
    D: "./src/no_react/D.js",
    reset: "./src/reset.css"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js|ts(x?)$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: "local",
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  optimization: {
    // usedExports: true,
    runtimeChunk: 'single',
    minimizer: [new TerserPlugin()],
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
    },
  },
};
