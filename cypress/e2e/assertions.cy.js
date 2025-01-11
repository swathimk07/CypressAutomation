describe("Assertions", () => {

    it("Implicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Validate the URL using implicit assertions
        cy.url()
            .should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'greenhrm');

        // Validate the visibility and value of the Username field
        cy.get("input[placeholder='Username']")
            .type("Admin")
            .should('have.value', 'Admin');
    });

    it("Explicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Enter credentials and submit the form
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();

        // Perform explicit assertions on the user dropdown name
        const expectedName = "testFN testLN"; // Define the expected name
        cy.get(".oxd-userdropdown-name").then((dropdown) => {
            const actualName = dropdown.text(); // Extract text from the element
            
            // BDD style assertions
            expect(actualName).to.eq(expectedName);
            expect(actualName).to.not.eq(expectedName);

            // TDD style assertions
            assert.equal(actualName, expectedName, "Expected and actual names match");
            assert.notEqual(actualName, expectedName, "Expected and actual names do not match");
        });
    });

});
