'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  Basename
} = require('./../index')

new Assertion(
  new IsString(
    new Basename(
      './src/Basename'
    )
  )
).call()
