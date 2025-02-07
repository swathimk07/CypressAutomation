Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
  describe('Airbnb', ()=>{
    it('Login', ()=>{
        cy.visit("https://www.airbnb.co.in/")
        cy.get("button[aria-label='Main navigation menu']").click()
        cy.get(".lgh3vnd.atm_am_1gtjylf.dir.dir-ltr").click()
    })

  })