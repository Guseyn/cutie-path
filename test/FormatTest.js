'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Format,
  ParsedPath
} = require('./../index')

new Assertion(
  new IsString(
    new Format(
      new ParsedPath(
        './src/Basename'
      )
    )
  )
).call();
