const should = require('should');
const day2 = require('../day2.js');
const fs = require('fs');

describe("day2", function() {
  var day2_input;
  fs.readFile("test/day2_input.txt", "utf8", (err, data) => {
    if (err)
    { throw err;}
    day2_input = data;
  });

  describe("findTotalWraps()", function () {
    it("should return 58 for 2x3x4", function () {
      day2.findTotalWraps("2x3x4").should.be.exactly(58);
    });
    it("should return 43 for 1x1x10", function () {
      day2.findTotalWraps("1x1x10").should.be.exactly(43);
    });
    it("should return 101 for 2x3x4\n1x1x10", function () {
      day2.findTotalWraps("2x3x4\n1x1x10").should.be.exactly(101);
    });
    it("should return correct value for input", function () {
      day2.findTotalWraps(day2_input).should.be.exactly(1606483);
    });
  });

  describe("findTotalRibbons()", function () {
    it("should return 34 for 2x3x4", function () {
      day2.findTotalRibbons("2x3x4").should.be.exactly(34);
    });
    it("should return 11 for 1x1x10", function () {
      day2.findTotalRibbons("1x1x10").should.be.exactly(14);
    });
    it("should return 45 for 2x3x4\n1x1x10", function () {
      day2.findTotalRibbons("2x3x4\n1x1x10").should.be.exactly(48);
    });
    it("should return correct value for input", function () {
      day2.findTotalRibbons(day2_input).should.be.exactly(3842356);
    });
  });
});