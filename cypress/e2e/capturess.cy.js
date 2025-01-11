describe('Screenshot and Video Capture', () => {
    it('Captures Screenshots and Validates Elements', () => {
        // Visit the OpenCart website
        cy.visit("https://www.opencart.com/");

        // Uncomment to capture a full-page screenshot
        // cy.screenshot("home"); 
        // cy.wait(2000);

        // Uncomment to capture a specific element screenshot
        // cy.get("img[title='OpenCart - Open Source Shopping Cart Solution']").screenshot("logo");

        // Automatically capture screenshots and videos on failure during execution via command prompt
        cy.get("body > header:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click();
        
        // Validate the text of a specific image element (expected to fail for demo purposes)
        cy.get("img[alt='Open Cloud Store']").should('have.text', "swathi");
    });
});
