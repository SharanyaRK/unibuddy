const assert = require('assert');
const getData = require('../author-service/repository/get-data.js');
const getSummaryData = require('../server/repository/get-summary-data.js');
const { expect } = require('chai');
const { error } = require('console');
describe('Test Author service:', () => {
    it('Match Book Id and Author', () => {
        getData(0).then((res) => {
            assert.equal(res.author, "Dan Harris", "author matching error");
        }) 
        getData(290).then((res) => {
            console.log(res)
           // assert.equal(res.message, "Internal server error", "author matching error");
        }) 
        getData().then((res) => {
            console.log(res)
           // assert.equal(res.message, "Internal server error", "author matching error");
        }) 
        getData("test").then((res) => {
            console.log(res)
           // assert.equal(res.message, "Internal server error", "author matching error");
        }) 

        })

    it('sd', () => {
        getSummaryData("business", "2")
        .then((res1) => {
            expect(res1.some((item) => item.id === 39)).to.equal(true);
        })
      
    })
})