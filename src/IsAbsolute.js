'use strict'

const { AsyncObject } = require('@guseyn/cutie');
const path = require('path');

// Represented result is boolean
class IsAbsolute extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return path.isAbsolute;
  }

}

module.exports = IsAbsolute;
