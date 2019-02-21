'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class NamespacedPath extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.toNamespacedPath
  }
}

module.exports = NamespacedPath
