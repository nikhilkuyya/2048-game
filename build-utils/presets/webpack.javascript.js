module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    }
  }
}
