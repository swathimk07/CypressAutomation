describe('Amazon Signup Flow', () => {
    /*it('sign up', () => {
      // Visit Amazon Signup page
      cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
      
      // Fill in signup details
      cy.get('#ap_email').type('swathimkkulal@gmail.com');
      cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)").click()
      cy.get("#continue").click()
      cy.get("#cvf-input-code").type()
      cy.get("input[type='submit']").click();


    })*/
   it("search prod", ()=>{
    cy.visit("https://www.amazon.com/")
    cy.get("#twotabsearchtextbox").type("tshirt")
    cy.get("#nav-search-submit-button").click()
    //add prod to cart
    cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] div[class='s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v1a1xfkvrhpsev211ons9lsmfw1']").click()
    cy.get("#add-to-cart-button").click()
    
})
})