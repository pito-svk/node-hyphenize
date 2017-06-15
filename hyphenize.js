const kebabCase = require('lodash.kebabcase')
const mapKeys = require('lodash.mapkeys')

function hyphenize (obj) {
  return mapKeys(obj, (_, key) => kebabCase(key))
}

module.exports = hyphenize
