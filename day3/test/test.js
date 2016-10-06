const should = require('should');
const day3 = require('../day3.js');
const fs = require('fs');

describe("day3", function () {
    var day3_input;
    fs.readFile("day3_input.txt", "utf8", (err, data) => {
        if (err)
        { throw err; }
        day3_input = data;
    });

    describe("findHouses()", function(){
        it("should return 2 for >", function() {
            day3.findHouses(">").should.be.exactly(2);
        });
        it("should return 4 for ^>v<", function() {
            day3.findHouses("^>v<").should.be.exactly(4);
        });
        it("should return 2 for ^v^v^v^v^v", function() {
            day3.findHouses("^v^v^v^v^v").should.be.exactly(2);
        });
        it("should return correct value for input", function() {
            day3.findHouses(day3_input).should.be.exactly(2081);
        });
    });
});
