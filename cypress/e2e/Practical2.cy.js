Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
describe('Practical 2 - Saucedemo', () => {
    it('Saucedemo flow)', () => { 
    cy.visit('https://www.saucedemo.com/')
    cy.wait(10000)
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get('.product_sort_container').select('az')
    cy.get('.product_sort_container').select('za')
    cy.get('.product_sort_container').select('lohi')
    cy.get('.product_sort_container').select('hilo')
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="item-quantity"]').should('have.length', '1')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test-"firstName"]').type("Swathi")
    cy.get('[data-test="lastName"]').type("m")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test-"postalCode"]').type("574559")
    cy.get('[data-test="subtotal-label"]').should('have.text','Item total: $49.99')
    cy.get('[data-test="tax-label"]').should('have.text', 'Tax: $4.00')
    cy.get('[data-test="total-label"]').should('have.text', 'Total: $53.99')
    cy.get('[data-test="finish"]').click()
    cy.get("[data-test=”complete-header]").should('have.text',"Thank you for your order!")
    
    })
})
