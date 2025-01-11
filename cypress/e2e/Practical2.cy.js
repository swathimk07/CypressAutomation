describe("p2", ()=>{
    it("p2", ()=>{
        cy.visit("https://www.saucedemo.com/", { timeout: 150000, failOnStatusCode: false });
        //cy.wait(5000);
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('#.product_sort_container').select('Name (A to Z');
    }) 
})