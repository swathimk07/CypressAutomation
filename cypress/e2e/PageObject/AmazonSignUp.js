// PageObject/AmazonSignUp.js
class AmazonSignUp {
    visit() {
      cy.visit("https://www.amazon.in/");
      cy.get('#nav-logo-sprites')
      .should('be.visible') // Verify the logo is visible
      //.screenshot('amazon-logo'); 
    }
  
    clickSignUp() {
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#auth-create-account-link').click();
    }
  
    fillDetails(name, phone, password) {
      cy.get('#ap_customer_name').type(name);
      cy.get('#ap_phone_number').type(phone);
      cy.get('#ap_password').type(password);
      cy.get('#continue').click();
    }
  }
  
  export default AmazonSignUp;
  