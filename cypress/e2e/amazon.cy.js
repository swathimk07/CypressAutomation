Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});
describe('Amazon Signup Flow', () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/")
  });
    it('sign up', () => {
      cy.get('#nav-logo-sprites')
      .should('be.visible') // Verify the logo is visible
      .screenshot('amazon-logo'); 
      // Visit Amazon Signup page
      //cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
      
      // Fill in signup details
      cy.get('#nav-link-accountList-nav-line-1').click()
      cy.wait(3000)
      cy.get('#createAccountSubmit').click()
      cy.get('#ap_customer_name').type("swathimk");
      cy.get('#ap_email').type("9483554959")
      cy.get('#ap_password').type("swathimk")
      cy.get('#ap_password_check').type("swathimk")
      cy.get('#continue').click()


    })
    it("sign in", ()=>{
       //cy.visit("https://www.amazon.com/");
       cy.get("#nav-link-accountList-nav-line-1").click()
       cy.get("#ap_email").type("9483554959")
        cy.get("#continue").click()
        cy.get("#ap_password").type("swathimk")
        cy.get("#signInSubmit").click()
      })

   it("search prod", ()=>{
   // cy.visit("https://www.amazon.com/")
    cy.wait(3000)
    cy.get("#twotabsearchtextbox").type("tshirt")
    cy.get("#nav-search-submit-button").click()
   
   })
   it("product listing", ()=>{
    //cy.visit("https://www.amazon.com/");
    cy.url().should('include', 'amazon');
        cy.get('#twotabsearchtextbox').type("Pagle Man Ke Das Chehare")
        cy.get('#nav-search-submit-button').click()
        cy.get("img[alt='Pagle Man Ke Das Chehare']").click()
      //.should('have.text', 'पगले मन के दस चेहरे'); // Verify the exact text inside the span
        cy.get("a[title='Add to List']").click()
        cy.get("#ap_email").type("9483554959")
        cy.get("#continue").click()
        cy.get("#ap_password").type("swathimk")
        cy.get("#signInSubmit").click()
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click()
   })
 })