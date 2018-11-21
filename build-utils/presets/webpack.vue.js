const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },
    plugins: [new VueLoaderPlugin()],
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
