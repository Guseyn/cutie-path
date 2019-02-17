# cutie-path

[![NPM Version](https://img.shields.io/npm/v/@cuties/path.svg)](https://npmjs.org/package/@cuties/path)
[![Build Status](https://travis-ci.org/Guseyn/cutie-path.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-path)
[![codecov](https://codecov.io/gh/Guseyn/cutie-path/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-path)

[Cutie](https://github.com/Guseyn/cutie) extension for <b>path</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-path/tree/master/test).

## Install

`npm install @cuties/child-process`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/path');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>path</b> module.

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ---------------- | ---------- | --------------------- |
| `Basename` | `path.basename` | `path, ext` | `string` |
| `Dirname` | `path.dirname` | `path` | `string` |
| `Extname` | `path.extname` | `path` | `string` |
| `Format` | `path.format` | `pathObject` | `string` |
| `IsAbsolute` | `path.isAbsolute` | `path` | `boolean` |
| `JoinedPaths` | `path.join` | `...paths` | `string` |
| `NamespacedPath` | `path.toNamespacedPath` | `path` | `string` |
| `NormalizedPath` | `path.normalize` | `path` | `string` |
| `ParsedPath` | `path.parse` | `path` | `object` |
| `RelativePath` | `path.relative` | `from, to` | `string` |
| `ResolvedPath` | `path.resolve` | `...paths` | `string` |
