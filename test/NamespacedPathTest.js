'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  NamespacedPath
} = require('./../index')

// That function is not found
new Assertion(
  new IsString(
    new NamespacedPath('./src/NamespacedPath')
  )
)///.call();
