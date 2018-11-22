'use strict';

module.exports = Configurable;

function Configurable(obj = {}) {
  const settings = Object.create(null);

  if (!isObject(obj)) {
    throw new Error('parameter must be an object');
  }

  Object.assign(obj, {
    /**
     * Get a value
     *
     * @param {string} name
     * @returns {any}
     */
    get(name) {
      return settings[name];
    },

    /**
     * Set a value
     *
     * @param {string|object} name
     * @param {any} [value]
     * @returns {object}
     */
    set(name, value) {
      if (isObject(name)) {
        Object.keys(name).forEach(key => (settings[key] = name[key]));
      } else {
        settings[name] = value;
      }

      return obj;
    },

    /**
     * Enable a property
     *
     * @param {string} name
     * @returns {object}
     */
    enable(name) {
      settings[name] = true;
      return obj;
    },

    /**
     * Return if a property is enabled
     *
     * @param {string} name
     * @returns {boolean}
     */
    enabled(name) {
      return !!settings[name];
    },

    /**
     * Disable a property
     *
     * @param {string} name
     * @returns {object}
     */
    disable(name) {
      settings[name] = false;
      return obj;
    },

    /**
     * Return if a property is disabled
     *
     * @param {string} name
     * @returns {boolean}
     */
    disabled(name) {
      return !settings[name];
    }
  });

  return obj;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
