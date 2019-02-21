'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class Format extends AsyncObject {
  constructor (pathObject) {
    super(pathObject)
  }

  syncCall () {
    return path.format
  }
}

module.exports = Format
