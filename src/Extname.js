'use strict'

const { AsyncObject } = require('@guseyn/cutie');
const path = require('path');

// Represented result is string
class Extname extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return path.extname;
  }

}

module.exports = Extname;
