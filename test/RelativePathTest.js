'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
