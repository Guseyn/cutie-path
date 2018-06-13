'use strict'

const { AsyncObject } = require('@guseyn/cutie');
const path = require('path');

// Represented result is string
class NormalizedPath extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return path.normalize;
  }

}

module.exports = NormalizedPath;
