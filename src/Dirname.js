'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class Dirname extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return path.dirname
  }
}

module.exports = Dirname
