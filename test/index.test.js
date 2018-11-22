'use strict';

const { expect } = require('chai');
const Configurable = require('../src');

describe('Configurable', function () {
  it('should throw a error if param is not a object', function () {
    const obj1 = Configurable();

    expect(obj1).to.have.all.keys(['get', 'set']);

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
});
