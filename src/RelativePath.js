'use strict'

const { AsyncObject } = require('@cuties/cutie');
const path = require('path');

// Represented result is string
class RelativePath extends AsyncObject {

  constructor(from, to) {
    super(from, to);
  }

  definedSyncCall() {
    return path.relative;
  }

}

module.exports = RelativePath;
