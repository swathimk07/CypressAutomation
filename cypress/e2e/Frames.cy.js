<<<<<<< HEAD
import 'cypress-iframe'
describe('Frames', ()=>{
    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });
    it('approach1', ()=>{
        cy.visit("https://jqueryui.com/droppable/")
        cy.frameLoaded('.demo-frame')//Id of the frame
        cy.iframe().find('#draggable').then(function(res){
        const frmValue = res.text()
        expect(frmValue).to.contain('Drag me to my target')
        cy.log(frmValue)
        })
    })
=======
import 'cypress-iframe'
describe('Frames', ()=>{
    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });
    it('approach1', ()=>{
        cy.visit("https://jqueryui.com/droppable/")
        cy.frameLoaded('.demo-frame')//Id of the frame
        cy.iframe().find('#draggable').then(function(res){
        const frmValue = res.text()
        expect(frmValue).to.contain('Drag me to my target')
        cy.log(frmValue)
        })
    })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})