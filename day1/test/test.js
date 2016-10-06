const should = require('should');
const day1 = require('../day1.js');
const fs = require('fs');

describe('day1', function () {
  var day1_input;
  fs.readFile("day1_input.txt", 'utf8', (err, data) => {
    if (err)
    { throw err; }
    day1_input = data;
  });

  describe('findFinalFloor()', function () {
    it('should return 0 for (())', function () {
      day1.findFinalFloor('(())').should.be.exactly(0);
    });
    it('should return correct value for input', function () {
      day1.findFinalFloor(day1_input).should.be.exactly(74);
    });
  });

  describe('findBasement()', function () {
    it('should return 5 for (()))', function () {
      day1.findBasement('(()))').should.be.exactly(5);
    });
    it('should return correct value for input', function () {
      day1.findBasement(day1_input).should.be.exactly(1795);
    });
  });
});