class Loginpage {
    visit() {
        cy.visit("https://desicrewdtrial.crystalhr.com/");
    }

    fillemail(value) { // Action method
        const field = cy.get("#Username"); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    fillpassword(value) {
        const field = cy.get('#Password');
        field.clear();
        field.type(value);
        return this;
    }

    Submit() {
        const button = cy.get('#btnLogin');
        button.click();
    }
}

export default Loginpage;
