'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  ResolvedPath
} = require('./../index')

new Assertion(
  new IsString(
    new ResolvedPath(
      './src', 'RelativePath'
    )
  )
).call()
