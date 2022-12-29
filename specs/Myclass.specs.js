var Myclass = require("../src/Myclass.js");
var Myobj= new Myclass();
var chai = require("chai");
var expect = chai.expect;

describe("Test suit",function(){
    it("Test the add method", function(){
        expect(Myobj.add(1,2)).to.be.equal(3);
    })
});
describe("Test suit",function(){
    it("Test the sub method", function(){
        expect(Myobj.sub(4,2)).to.be.equal(2);
    })
});
describe("Test suit",function(){
    it("Test the add method", function(){
        expect(Myobj.add(1,2)).to.be.equal(3);
        
    })
    it("Test the sub method", function(){
        expect(Myobj.sub(4,2)).to.be.equal(2);
        })
});