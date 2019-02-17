'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ParsedPath
} = require('./../index')

new Assertion(
  new IsObject(
    new ParsedPath(
      './src/ParsedPath'
    )
  )
).call()
