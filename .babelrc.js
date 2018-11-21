const isTest = String(process.env.NODE_ENV) === "test"

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isTest ? "commonjs" : false
      }
    ],
    "@babel/preset-flow"
  ],
  plugins: [
    isTest ? "@babel/plugin-transform-modules-commonjs" : false,
    "@babel/plugin-syntax-dynamic-import"
  ].filter(Boolean)
}
