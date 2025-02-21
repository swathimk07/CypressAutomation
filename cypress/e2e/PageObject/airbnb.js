class airbnbsignup {
    visit() {
      cy.visit("https://www.airbnb.co.in/")
    }
  
    clickSignUp() {
      cy.get('[data-testid="cypress-headernav-profile"]').click()
      cy.get('.lgh3vnd.atm_am_1gtjylf.dir.dir-ltr').click();
    }
  
    fillDetails(phone) {
      //cy.scrollTo('bottom');
      cy.contains('div', 'Continue with email').click();
      cy.get('#email-login-email').type("swathimkkulal@gmail.com")
      cy.get('span[class*="t1dqvypu"]').click();//clicking on continue
      cy.wait(6000)
      cy.pause()
      cy.get('#email-signup-password').type("hemanth@1907")
      cy.get('span.t1dqvypu').click() // Targeting by class name, clicking on continue
      //cy.pause(); // Pause if needed to enter otp
     // cy.get('#country')
//.select('India (+91)'); //dropdown values
      //cy.get(".ihbwjpb.atm_9s_1txwivl.atm_k4_idpfg4.dir.dir-ltr").type(9483554959)
      //cy.get('button[type="button"].l1ovpqvx').click();
// Select button with type "submit"
      //cy.pause(); 
      //cy.get('.tmel3e0').click()
    }
  }
  
  export default airbnbsignup;
  