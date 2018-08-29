'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  NamespacedPath
} = require('./../index')

// That function is not found
new Assertion(
  new IsString(
    new NamespacedPath('./src/NamespacedPath')
  )
)///.call();
