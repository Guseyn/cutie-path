'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
