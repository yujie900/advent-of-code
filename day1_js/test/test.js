const should = require('should');
const day1 = require('../day1.js');
const day2 = require('../day2.js');
const fs = require('fs');

describe('day1', function () {
  var day1_input;
  fs.readFile('day1_input.txt', 'utf8', (err, data) => {
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

  describe('findBasement', function () {
    it('should return 5 for (()))', function () {
      day1.findBasement('(()))').should.be.exactly(5);
    });
    it('should return correct value for input', function () {
      day1.findBasement(day1_input).should.be.exactly(1795);
    });
  });
});

describe("day2", function() {
  var day2_input;
  fs.readFile("day2_input.txt", "utf8", (err, data) => {
    if (err)
    { throw err;}
    day2_input = data;
  });

  describe("findTotal", function () {
    it("should return 58 for 2x3x4", function () {
      day2.findTotal("2x3x4").should.be.exactly(58);
    });
    it("should return 43 for 1x1x10", function () {
      day2.findTotal("1x1x10").should.be.exactly(43);
    });
    it("should return 101 for 2x3x4\n1x1x10", function () {
      day2.findTotal("2x3x4\n1x1x10").should.be.exactly(101);
    });
    it("should return correct value for input", function () {
      day2.findTotal(day2_input).should.be.exactly(1606483);
    });
  });

});


