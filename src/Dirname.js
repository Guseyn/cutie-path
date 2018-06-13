'use strict'

const { AsyncObject } = require('@guseyn/cutie');
const path = require('path');

// Represented result is string
class Dirname extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return path.dirname;
  }

}

module.exports = Dirname;
