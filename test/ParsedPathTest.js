'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ParsedPath
} = require('./../index')

new Assertion(
  new IsObject(
    new ParsedPath(
      './src/ParsedPath'
    )
  )
).call();
