'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  IsAbsolute
} = require('./../index')

new Assertion(
  new IsBoolean(
    new IsAbsolute(
      './src/IsAbsolute'
    )
  )
).call();
