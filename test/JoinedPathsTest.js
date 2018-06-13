'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  JoinedPaths
} = require('./../index')

new Assertion(
  new IsString(
    new JoinedPaths('./src', 'JoinedPaths')
  )
).call();
