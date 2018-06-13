'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Dirname
} = require('./../index')

new Assertion(
  new IsString(
    new Dirname(
      './src/Direname'
    )
  )
).call();
