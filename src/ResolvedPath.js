'use strict'

const { AsyncObject } = require('@cuties/cutie');
const path = require('path');

// Represented result is string
class ResolvedPath extends AsyncObject {

  constructor(...paths) {
    super(...paths);
  }

  definedSyncCall() {
    return path.resolve;
  }

}

module.exports = ResolvedPath;
