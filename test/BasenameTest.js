'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Basename
} = require('./../index')

new Assertion(
  new IsString(
    new Basename(
      './src/Basename'
    )
  )
).call();
