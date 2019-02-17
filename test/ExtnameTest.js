'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  Extname
} = require('./../index')

new Assertion(
  new IsString(
    new Extname(
      './src/Extname'
    )
  )
).call()
