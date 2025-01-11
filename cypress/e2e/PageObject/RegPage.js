class Regpage {
    visit() {
        cy.visit("https://mytestingthoughts.com/Sample/home.html");
    }

    Fname(value) { // Action method
        const field = cy.get('input[placeholder="First Name"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Lname(value) { // Action method
        const field = cy.get('input[placeholder="Last Name"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Gender(value) { // Action method
        cy.get('#inlineRadioFemale').check(); // Selecting the female option
        return this; // Representing the class
    }

    Hobbies(value) { // Action method
        const field = cy.get('#exampleFormControlSelect2').select('Reading'); // Page elements
        return this; // Representing the class
    }

    Dept(value) { // Action method
        const field = cy.get('select[name="department"]').select('MPDC'); // Page elements
        return this; // Representing the class
    }

    username(value) { // Action method
        const field = cy.get('input[placeholder="Username"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Password(value) { // Action method
        const field = cy.get('input[placeholder="Password"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Confpassword(value) { // Action method
        const field = cy.get('input[placeholder="Confirm Password"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Email(value) { // Action method
        const field = cy.get('input[placeholder="E-Mail Address"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Contact(value) { // Action method
        const field = cy.get('input[placeholder="(639)"]'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    AddInfo(value) { // Action method
        const field = cy.get('#exampleFormControlTextarea1'); // Page elements
        field.clear();
        field.type(value);
        return this; // Representing the class
    }

    Submit() { // Action method
        const button = cy.get('button[type=submit]'); // Page elements
        button.click();
    }
}

export default Regpage;
