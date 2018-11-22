const framworkConfig = framework =>
  require(`./build-utils/presets/webpack.${framework}`)(framework)
const pluginConfig = build =>
  require(`./build-utils/plugins/webpack.${build}`)(build)
// const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { getIfUtils } = require("webpack-config-utils")
const path = require("path")

module.exports = (env = { mode: "development" }) => {
  const { ifDevelopment } = getIfUtils(env.mode)

  const basicConfig = {
    context: path.join(__dirname, "src"),
    entry: "./index.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      // publicPath: ifDevelopment("dist/", path.join(__dirname, "dist")),
      chunkFilename: ifDevelopment(
        "[name].[hash].chunk.js",
        "[name].[chunkhash].bundle.js"
      )
    },
    devServer: {
      contentBase: "./dist"
    },
    mode: (env && env.mode) || "none"
  }

  const jsConfig = framworkConfig("javascript")
  const vueConfig = framworkConfig("vue")
  const buildConfig = pluginConfig("build")

  const config = webpackMerge(basicConfig, jsConfig, vueConfig, buildConfig)
  return config
}
