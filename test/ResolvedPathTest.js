'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ResolvedPath
} = require('./../index')

new Assertion(
  new IsString(
    new ResolvedPath(
      './src', 'RelativePath'
    )
  )
).call();
