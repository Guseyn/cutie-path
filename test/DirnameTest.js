'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  Dirname
} = require('./../index')

new Assertion(
  new IsString(
    new Dirname(
      './src/Direname'
    )
  )
).call()
