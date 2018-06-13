'use strict'

const { AsyncObject } = require('@guseyn/cutie');
const path = require('path');

// Represented result is string
class Basename extends AsyncObject {

  constructor(path, ext) {
    super(path, ext);
  }

  definedSyncCall() {
    return path.basename;
  }

}

module.exports = Basename;
