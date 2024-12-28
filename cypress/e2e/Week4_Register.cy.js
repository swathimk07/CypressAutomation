<<<<<<< HEAD

describe('Register', ()=> {
    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });
    it('Reg', ()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get("input[placeholder='First Name']").type("swathi")
        cy.get("input[placeholder='Last Name']").type("MK")
        cy.get("input[type='email']").type('swathi@gmail.com');
        cy.get("input[type='tel']").type('1234567890');
        cy.get("input[type='radio'][value='FeMale']").check();
        cy.get("input[type='checkbox'][value='Movies']").check();
        //cy.get("input[placeholder='Languages']").type('English, French');
        cy.get("#Skills").select('Adobe InDesign'); 
        cy.get("#countries").select('Select Country'); 
        cy.get('.select2-selection').click()
        cy.get('.select2-results__option').contains('India').click()
        cy.get("#yearbox").select('1995'); // Replace with actual year
        cy.get("select[placeholder='Month']").select('January'); // Replace with actual month
        cy.get("#daybox").select('15'); // Replace with actual day
        cy.get("#firstpassword").type('StrongPassword123!');
        cy.get("#secondpassword").type('StrongPassword123!');
        cy.get("#submitbtn").click();
        //cy.contains('Form submitted successfully').should('be.visible');
    })
=======

describe('Register', ()=> {
    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });
    it('Reg', ()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get("input[placeholder='First Name']").type("swathi")
        cy.get("input[placeholder='Last Name']").type("MK")
        cy.get("input[type='email']").type('swathi@gmail.com');
        cy.get("input[type='tel']").type('1234567890');
        cy.get("input[type='radio'][value='FeMale']").check();
        cy.get("input[type='checkbox'][value='Movies']").check();
        //cy.get("input[placeholder='Languages']").type('English, French');
        cy.get("#Skills").select('Adobe InDesign'); 
        cy.get("#countries").select('Select Country'); 
        cy.get('.select2-selection').click()
        cy.get('.select2-results__option').contains('India').click()
        cy.get("#yearbox").select('1995'); // Replace with actual year
        cy.get("select[placeholder='Month']").select('January'); // Replace with actual month
        cy.get("#daybox").select('15'); // Replace with actual day
        cy.get("#firstpassword").type('StrongPassword123!');
        cy.get("#secondpassword").type('StrongPassword123!');
        cy.get("#submitbtn").click();
        //cy.contains('Form submitted successfully').should('be.visible');
    })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})