var postcss = require('postcss')

module.exports = postcss.plugin('postcss-rem2rpx', function (opts) {
  opts = opts || { scale: 2 }
  var scale = opts.scale
  // Work with options here

  return function (root) {
    root.replaceValues(
      /(\.|\d)+rem/,
      { fast: 'rem' },
      function (string) {
        return (parseFloat(string) * scale) + 'rpx'
      }
    )
  }
})
