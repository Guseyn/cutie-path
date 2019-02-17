'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsBoolean
} = require('@cuties/is')
const {
  IsAbsolute
} = require('./../index')

new Assertion(
  new IsBoolean(
    new IsAbsolute(
      './src/IsAbsolute'
    )
  )
).call()
