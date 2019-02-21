'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class Extname extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.extname
  }
}

module.exports = Extname
