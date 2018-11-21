module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  transformIgnorePatterns: ["/node_modules/", "/dist/", "/.vscode/"],
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js"
  },
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  }
}
