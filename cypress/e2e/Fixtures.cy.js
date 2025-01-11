describe('Fixture Handling', () => {
    // Loading the fixture data before test execution
    before(function () {
        cy.fixture('example').then((data) => {
            this.data = data; // Storing fixture data in the class instance
        });
    });

    it('Login using fixture data', function () {
        cy.visit('https://demo.opencart.com/admin/');
        cy.get("input[placeholder='Username']").type(this.data.Username); // Typing username from fixture
        cy.get("input[placeholder='Password']").type(this.data.Password); // Typing password from fixture
    });
});
