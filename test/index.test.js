'use strict';

const { expect } = require('chai');
const Configurable = require('../src');

describe('Configurable', function () {
  it('should throw a error if param is not a object', function () {
    const obj1 = Configurable();

    expect(obj1).to.contain.all.keys(['get', 'set']);

    expect(() => Configurable(null)).to.throw(Error);
    expect(() => Configurable('null')).to.throw(Error);
    expect(() => Configurable([])).to.throw(Error);
    expect(() => Configurable(2)).to.throw(Error);
  });

  it('should make a object have get and set methods', function () {
    const obj = {};
    Configurable(obj);

    expect(obj).to.contain.all.keys(['get', 'set']);

    obj.set('x', 1);

    expect(obj.get('x')).to.be.equal(1);

    obj.set({ x: 2, y: 3, z: 4 });

    expect(obj.get('x')).to.be.equal(2);
    expect(obj.get('y')).to.be.equal(3);
    expect(obj.get('z')).to.be.equal(4);
  });

  it('should make a object have enable/enabled and disable/disabled methods', function () {
    const obj = {};
    Configurable(obj);

    expect(obj).to.contain.all.keys(['enable', 'enabled', 'disable', 'disabled']);

    obj.enable('x');

    expect(obj.get('x')).to.be.equal(true);
    expect(obj.enabled('x')).to.be.equal(true);

    obj.disable('x');

    expect(obj.get('x')).to.be.equal(false);
    expect(obj.disabled('x')).to.be.equal(true);
    expect(obj.enabled('x')).to.be.equal(false);
  });

  it('should return a list of all settings', function () {
    const obj = Configurable();
    const settings = { x: 1, y: 2, z: 3 };

    expect(obj).to.have.any.keys('listSettings');

    obj.set(settings);
    const objSettings = obj.listSettings();

    expect(objSettings).not.be.equal(settings);
    expect(objSettings).to.have.all.keys(['x', 'y', 'z']);

    expect(objSettings).to.have.property('x', 1);
    expect(objSettings).to.have.property('y', 2);
    expect(objSettings).to.have.property('z', 3);
  });
});
