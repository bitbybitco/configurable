[![travis build](https://img.shields.io/travis/bitbybitco/configurable.svg?style=flat)](https://travis-ci.org/bitbybitco/configurable)
[![Dependency Status](https://david-dm.org/bitbybitco/configurable.svg?theme=shields.io)](https://david-dm.org/bitbybitco/configurable)
[![devDependency Status](https://david-dm.org/bitbybitco/configurable/dev-status.svg?theme=shields.io)](https://david-dm.org/bitbybitco/configurable#info=devDependencies)
[![Codecov](https://img.shields.io/codecov/c/github/bitbybitco/configurable.svg)]()
[![MIT License](https://img.shields.io/github/license/bitbybitco/configurable.svg?style=flat)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)](https://github.com/semantic-release/semantic-release)

## What is it?

Configuration mixin for composition pattern

## How to use it?

Make something configurable:

```js
const createConfigurable = require("@bitbybit/configurable");

// plain obj
var obj = {};
createConfigurable(obj);

// returns the obj itself
var obj = Configurable({});
```

```js
.get(name)
.set(name, val)
.set(obj)
.enable(name)
.disable(name)
.enabled(name)
.disabled(name)
```
