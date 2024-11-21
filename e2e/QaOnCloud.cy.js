//const { describe } = require("mocha");

describe('Qaoncloud', ()=> {
    it('header', ()=>{
        cy.visit("https://www.qaoncloud.com/")
        cy.get("#rect-5371").click()
    })
})