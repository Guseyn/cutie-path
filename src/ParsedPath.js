'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is object
class ParsedPath extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.parse
  }
}

module.exports = ParsedPath
