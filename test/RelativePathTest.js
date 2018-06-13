'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  RelativePath
} = require('./../index')

new Assertion(
  new IsString(
    new RelativePath(
      './src/RelativePath', './src'
    )
  )
).call();
