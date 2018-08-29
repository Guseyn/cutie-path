'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  NormalizedPath
} = require('./../index')

new Assertion(
  new IsString(
    new NormalizedPath('./src//NormalizedPath')
  )
).call();
