'use strict';

module.exports = Configurable;

function Configurable(obj = {}) {
  const settings = {};

  if (!isObject(obj)) {
    throw new Error('parameter must be an object');
  }

  Object.assign(obj, {
    get(name) {
      return settings[name];
    },
    set(name, value) {
      if (isObject(name)) {
        Object.keys(name).forEach(key => (settings[key] = name[key]));
      } else {
        settings[name] = value;
      }

      return obj;
    }
  });

  return obj;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
