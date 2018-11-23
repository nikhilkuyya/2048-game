const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isProd = process.env.NODE_ENV === "production"

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "vue-style-loader",
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    resolve: {
      alias: {
        vue$: path.resolve(
          __dirname,
          "..",
          "..",
          "node_modules/vue/dist/vue.esm.js"
        )
      }
    }
  }
}
