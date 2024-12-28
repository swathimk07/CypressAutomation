<<<<<<< HEAD
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('fileupload', ()=>{
    it('fileupload', ()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        const imagefile = 'avanti.png';
        cy.get('#imagesrc').attachFile(imagefile);
    })
=======
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
  
describe('fileupload', ()=>{
    it('fileupload', ()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        const imagefile = 'avanti.png';
        cy.get('#imagesrc').attachFile(imagefile);
    })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})