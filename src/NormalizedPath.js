'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class NormalizedPath extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.normalize
  }
}

module.exports = NormalizedPath
