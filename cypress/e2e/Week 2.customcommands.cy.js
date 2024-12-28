<<<<<<< HEAD
describe('customsuite', () =>{
    it('Login', () =>{
      cy.login('Admin','admin123')//valid data
      cy.title().should('be.equal','OrangeHRM')
    })
     it('AddCustomer', () =>{
        //login script
        cy.login('Admin','admin163') //invalid
        cy.title().should('be.equal','OrangeHRM')
        //Add customer script
        cy.log('Adding customer')
     })

     it('EditCustomer', () =>{
        //Login script
        cy.login('swathi@qaoncloud.com','cloud@2021')

        //Editing customer
        cy.log('Editing customer')
     })
     
=======
describe('customsuite', () =>{
    it('Login', () =>{
      cy.login('Admin','admin123')//valid data
      cy.title().should('be.equal','OrangeHRM')
    })
     it('AddCustomer', () =>{
        //login script
        cy.login('Admin','admin163') //invalid
        cy.title().should('be.equal','OrangeHRM')
        //Add customer script
        cy.log('Adding customer')
     })

     it('EditCustomer', () =>{
        //Login script
        cy.login('swathi@qaoncloud.com','cloud@2021')

        //Editing customer
        cy.log('Editing customer')
     })
     
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})