<<<<<<< HEAD
//const { describe } = require("mocha");
describe('fixtures', ()=>{
    //function(data) is used to call a data in example file
    //calling/loading our fixture file, if it is located in some other folder then we have to call with entire path
    //this.data = data //this keyword represents a class
    before(function () {
        cy.fixture('example').then((data) => {
            this.data = data; // Assigning fixture data to `this`
        });
    });
        
    it('fixture', function (){
       cy.visit('https://demo.opencart.com/admin/')
       cy.get("input[placeholder='Username']").type(this.data.Username)
       cy.get("input[placeholder='Password']").type(this.data.Password)
        
    })
=======
//const { describe } = require("mocha");
describe('fixtures', ()=>{
    //function(data) is used to call a data in example file
    //calling/loading our fixture file, if it is located in some other folder then we have to call with entire path
    //this.data = data //this keyword represents a class
    before(function () {
        cy.fixture('example').then((data) => {
            this.data = data; // Assigning fixture data to `this`
        });
    });
        
    it('fixture', function (){
       cy.visit('https://demo.opencart.com/admin/')
       cy.get("input[placeholder='Username']").type(this.data.Username)
       cy.get("input[placeholder='Password']").type(this.data.Password)
        
    })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})