# cutie-path

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>path</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-path/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-path');
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

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-path.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-path
