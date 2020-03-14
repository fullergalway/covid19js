module.exports = {
  mode: "production",
  output: {
    filename: 'covid19.js',
    libraryTarget: 'umd',
    library: 'covid19',
    globalObject: 'this'
  }
}
