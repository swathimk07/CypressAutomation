Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});
describe('Amazon Signup Flow', () => {
 beforeEach(() => {
    cy.visit("https://www.amazon.in/")
  });
   it('sign up', () => {
     //  Amazon Signup page
     //cy.visit('https://www.amazon.in/');
      cy.get('#nav-logo-sprites')
      .should('be.visible') // Verify the logo is visible
      .screenshot('amazon-logo'); 
     
      
      // Fill in signup details
      cy.get('#nav-link-accountList-nav-line-1').click()
      cy.wait(5000)
      cy.get('#auth-create-account-link').click()
      cy.get('#ap_customer_name').type("swathimk");
      cy.get('#ap_phone_number').type("9483554959")
      cy.get('#ap_password').type("swathimk")
      //cy.get('#ap_password_check').type("swathimk")
      cy.get('#continue').click()


    })
    
      it("Sign in, search product, and add to cart", () => {
        // Sign in
        //cy.visit("https://www.amazon.in/");
        cy.url().should("include", "amazon");
        cy.get("#nav-link-accountList-nav-line-1").click();
        cy.wait(3000)
        //cy.get('#ap_email_login').type("9483554959");
        //cy.get('#ap_email').type("9483554959");
        cy.get('#ap_email').type("9483554959").should('have.value', '9483554959'); // Wait until the input has the specified value

        cy.get("#continue").click();
        cy.get("#ap_password").type("swathimk07");
        cy.get("#signInSubmit").click();
        cy.pause(); // Pause if needed for debugging
    
        // Step 2: Search for a product (e.g., "tshirt")
        cy.wait(3000);
        cy.get("#twotabsearchtextbox").type("tshirt");
        cy.get("#nav-search-submit-button").click();
        //cy.get("a[aria-label='Apply the filter Get It by Tomorrow to narrow results'] i[class='a-icon a-icon-checkbox']").click(); // Apply filter checkbox
        cy.get("a[aria-label='Apply the filter Top Brands to narrow results'] i[class='a-icon a-icon-checkbox']").click()//select brand
        cy.get("button[value='S']").click(); // Select size
        cy.get("a[title='Reds'] div[class='colorsprite aok-float-left']").click(); // Select color
        
        // Step 3: Product listing and add specific product to cart
        cy.wait(3000)
        cy.get("#twotabsearchtextbox").clear({ force: true });

        cy.wait(3000)
        cy.get("#twotabsearchtextbox").type(
          "The Sanatan Dharam: True Source of all Technology"
        );
        cy.get("#nav-search-submit-button").click();
        cy.get(
          "div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] div[class='a-section aok-relative s-image-fixed-height']"
        ).click();
    
        // Navigate to the product's page
        cy.get('a[target="_blank"]').then(($link) => {
          const url = $link.prop("href");
          cy.visit(url);
        });
    
        cy.scrollTo(0, 500);
        cy.get("#add-to-cart-button").click();
        //cy.pause(); //
    
        // Proceed to checkout
        //cy.get("input[value='Proceed to checkout']").click()
        //cy.get('[data-testid="Address_selectShipToThisAddress"]').click()

        //Payment 
        /*cy.scrollTo(0, 500);
        cy.get('#pp-QbJeJQ-106').click()*/
    
        // Sign in again during checkout
        //cy.get("#ap_email_login").type("9483554959");
        //cy.get("#continue").click();
        //cy.get("#ap_password").type("swathimk");
        //cy.get("#signInSubmit").click();
        
        //Logout
        cy.get("#nav-logo-sprites").click()
        cy.get("span[class='nav-line-2 ']") // Replace with the menu item's selector
  .trigger('mouseover');
        cy.get("a[id='nav-item-signout'] span[class='nav-text']").click()
      });
    });
    
  