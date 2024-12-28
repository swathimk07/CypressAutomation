describe('Login', () => {

    it('Login', () => {
      cy.visit('https://avantidash-dot-indihood-qa-in.appspot.com/');
      cy.wait(7000); // Waits for 5 seconds (5000 milliseconds)
      cy.get(':nth-child(2) > .firebaseui-idp-button').click()//email
      cy.get('.mdl-textfield__input').type('ranvitharao@gmail.com');
      cy.get('.firebaseui-id-submit').click().debug()//submit email 
      cy.get(':nth-child(3) > .mdl-textfield__input').type('Avanti@123').pause()
      cy.get('.firebaseui-id-submit').click()//submit pwd
      cy.get('.app-toolbar-row > :nth-child(1) > [aria-haspopup="true"]').click()//click create
      cy.wait(7000); // Waits for 5 seconds (5000 milliseconds)
      cy.get(':nth-child(14) > .mat-menu-item').click()//select loan application
      cy.wait(12000);
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click()//click not set
      cy.wait(10000); // Waits for 5 seconds (5000 milliseconds)
      cy.get('#mat-input-1').type('Swathi - MK - Aadhaar3700') //type  applicant
      cy.wait(9000);
      cy.get('.mat-option-text > .ng-star-inserted').contains('Swathi - MK - Aadhaar3700').click() //select applicant
      cy.wait(9000);
      cy.get('section.ng-star-inserted > [fxlayout="row"] > :nth-child(2) > .mat-icon').click() //click on applicant name
      cy.get('.value > span > img').click() //location
      cy.get('.button-panel > .mat-raised-button').click() //select location
      cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click() //loan product
      cy.get('#mat-option-20 > .mat-option-text > .ng-star-inserted').click() 

    });
    
  });
      