describe('Qaoncloud', () => {
    beforeEach(() => {
        // Handle uncaught exceptions to prevent test failures
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Prevent Cypress from failing the test
        });
    });

    it('header', () => {
        // Visit the QAonCloud website and verify title and URL
        cy.visit("https://www.qaoncloud.com/");
        cy.title().should("eq", "QA Testing Services | Software Testing Services - QAonCloud"); // Verify title
        cy.url().should('include', 'qaoncloud') // Verify 'qaoncloud' in URL
            .and('contain', 'com'); // Verify 'com' in URL
        
        // Scroll to 10% of the page
        cy.scrollTo(0, '10%');

        // Global services section
        cy.get('.hotspot-content-overlay').should('be.visible');
        cy.get('#pin646f8c71dffdc190aade > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover');
        cy.wait(3000);
        cy.get('#pin646f8c71e0c7144bcbb3 > .pin-loop-inner > .pin-loop-content > .pin-icon').trigger('mouseover');
        cy.wait(3000);

        // Services section
        cy.scrollTo(0, '30%');
        cy.get('#image-map-pro-3982 > .imp-wrap > .imp-zoom-outer-wrap > .imp-translate-wrap > .imp-zoom-wrap > .imp-main-image').should('be.visible');

        // Industries served section
        cy.scrollTo(0, '35%');
        cy.get("div[id='slick-slide10'] a[class='title-item']").click();
        cy.wait(3000);
        cy.get("div[id='slick-slide11'] h5[class='tab-titles_heading']").click();
        cy.wait(3000);
        cy.get("div[id='slick-slide12'] h5[class='tab-titles_heading']").click();

        // Build great app section
        cy.scrollTo(0, '70%');
        cy.get('.elementor-element-3cd64ed > .elementor-container').should('be.visible');

        cy.scrollTo(0, '85%');
        cy.get('.elementor-element-a93589e > .elementor-container').should('be.visible');

        // Know more about QOC section
        cy.scrollTo(0, '95%');
        cy.get('.elementor-element-1191eac > .elementor-background-overlay').should('be.visible');
        cy.get('.elementor-element-e1d6dff > .elementor-widget-container > .ot-button > .octf-btn').click();
        cy.get('.ContactUs > .container').should('be.visible');

        // Fill the contact form
        cy.scrollTo(0, '25%');
        cy.get('form > [name="name"]').type("swathi");
        cy.get('form > [name="email"]').type("swathi@qaoncloud.com");
        cy.get('form > .onlyNumber').type('9876543278');
        cy.get('form > [name="companyname"]').type("cloud");
        cy.get('form > [name="role"]').type("qa");

        // Note: Uncomment and update the following line if CAPTCHA automation is supported.
        // cy.get('[data-aos="fade-left"] > form > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').check().should('be.checked');
    });
});
