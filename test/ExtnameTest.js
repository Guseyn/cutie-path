'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Extname
} = require('./../index')

new Assertion(
  new IsString(
    new Extname(
      './src/Extname'
    )
  )
).call();
