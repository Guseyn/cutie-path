'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class JoinedPaths extends AsyncObject {
  constructor (...paths) {
    super(...paths)
  }

  syncCall () {
    return path.join
  }
}

module.exports = JoinedPaths
