'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  NormalizedPath
} = require('./../index')

new Assertion(
  new IsString(
    new NormalizedPath('./src//NormalizedPath')
  )
).call();
