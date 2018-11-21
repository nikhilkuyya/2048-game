const HtmlWebpackPlugin = require("html-webpack-plugin")
const cleanwebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = () => {
  return {
    plugins: [
      new cleanwebpackPlugin(["dist"]),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "..", "src", "index.html")
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
