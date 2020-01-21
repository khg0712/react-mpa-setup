const merge = require("webpack-merge");
const path = require("path");

const commonConfig = require("./common");
const prodConfig = require("./prod");
const devConfig = require("./dev");
module.exports = function buildConfig(env, argv) {
  const isOnDevelop = argv.mode !== "production";

console.log(path.resolve(__dirname, "../src"))
  console.log(argv.mode);
  return merge(commonConfig, isOnDevelop ? devConfig : prodConfig);
};
