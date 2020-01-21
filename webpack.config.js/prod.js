const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[contenthash].js"
	},
	mode: "production",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./A.html",
			chunks: ["A", "vendors", "[name].css", "polyfill", "runtime"]
		}),
		new HtmlWebpackPlugin({
			filename: "./B.html",
			template: "public/index.html",
			chunks: ["B", "vendors", "[name].css", "polyfill", "runtime"]
		}),
		new HtmlWebpackPlugin({
			filename: "./C.html",
			template: "public/C.html",
			chunks: ["C", "vendors", "[name].css", "polyfill", "reset", "runtime"]
		}),
		new HtmlWebpackPlugin({
			filename: "./D.html",
			template: "public/C.html",
			chunks: ["D", "vendors", "[name].css", "polyfill", "reset", "runtime"]
		}),
		new MiniCssExtractPlugin({
			filename: "static/[name].css",
			chunkFilename: "[name].css"
		}),
		new BundleAnalyzerPlugin()
	]
};
