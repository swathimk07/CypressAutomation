//Hooks - before, after, before each, after each(derived from mocha framework) - usage - to specify any prerequisite before starting the execution
describe('hooks',() => {

    before(()=>{
        cy.log("launch application") //log - It is used to output custom messages to the Cypress Test Runner's Command Log
    })
    
    after(()=>{
        cy.log("close app")
    })

    beforeEach(()=>{
        cy.log("login")
    })

    afterEach(()=>{
        cy.log("logout")
    })

    it('search', () =>{
         cy.log("searching")
    })

    it.skip('Advance search', ()=>{ //skip is a tag used to skip specific it block
        cy.log("advanced searching")
    })

    it.only('listing products', ()=>{
        cy.log("listing products")
    })
})