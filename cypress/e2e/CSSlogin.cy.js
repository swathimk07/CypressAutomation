describe('Login and Loan Application', () => {

  it('Performs Login and Loan Application Actions', () => {
      // Visit the dashboard
      cy.visit('https://avantidash-dot-indihood-qa-in.appspot.com/');
      cy.wait(7000); // Wait for page load

      // Login process
      cy.get(':nth-child(2) > .firebaseui-idp-button').click(); // Click email login
      cy.get('.mdl-textfield__input').type('ranvitharao@gmail.com'); // Enter email
      cy.get('.firebaseui-id-submit').click().debug(); // Submit email
      cy.get(':nth-child(3) > .mdl-textfield__input').type('Avanti@123').pause(); // Enter password
      cy.get('.firebaseui-id-submit').click(); // Submit password

      // Navigate to "Create" and select "Loan Application"
      cy.get('.app-toolbar-row > :nth-child(1) > [aria-haspopup="true"]').click(); // Click "Create"
      cy.wait(7000); // Wait for the menu to load
      cy.get(':nth-child(14) > .mat-menu-item').click(); // Select "Loan Application"

      // Loan Application Process
      cy.wait(12000); // Wait for application form to load
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click(); // Click "Not Set"
      cy.wait(10000); // Wait for applicant input to load
      cy.get('#mat-input-1').type('Swathi - MK - Aadhaar3700'); // Enter applicant details
      cy.wait(9000); // Wait for suggestions
      cy.get('.mat-option-text > .ng-star-inserted').contains('Swathi - MK - Aadhaar3700').click(); // Select applicant

      // Set location and loan product
      cy.wait(9000); // Wait before proceeding
      cy.get('section.ng-star-inserted > [fxlayout="row"] > :nth-child(2) > .mat-icon').click(); // Click applicant name
      cy.get('.value > span > img').click(); // Click location
      cy.get('.button-panel > .mat-raised-button').click(); // Select location
      cy.get(':nth-child(2) > :nth-child(4) > :nth-child(1) > section.ng-star-inserted > app-single-field > [fxlayout="row inline"] > .field-wrapper > app-id-field.ng-star-inserted > .value').click(); // Select loan product
      cy.get('#mat-option-20 > .mat-option-text > .ng-star-inserted').click(); // Confirm loan product
  });

});
