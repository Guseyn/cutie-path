'use strict'

const { AsyncObject } = require('@cuties/cutie')
const path = require('path')

// Represented result is string
class Format extends AsyncObject {
  constructor (pathObject) {
    super(pathObject)
  }

  definedSyncCall () {
    return path.format
  }
}

module.exports = Format
