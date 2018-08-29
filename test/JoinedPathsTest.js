'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  JoinedPaths
} = require('./../index')

new Assertion(
  new IsString(
    new JoinedPaths('./src', 'JoinedPaths')
  )
).call();
