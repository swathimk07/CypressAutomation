let rowsLength; // Variable to store the length of rows from Excel data

describe('datadriven', () => {
    before(() => {
        // Read data from Excel and write it to a JSON file
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length; // Store the number of rows
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows }); // Save rows to a JSON file
        });

        // Visit the OpenCart admin login page
        cy.visit("https://demo.opencart.com/admin/");
    });

    it('datadriven: Register User', () => {
        // Load the data from the JSON file and process it
        cy.fixture('xlsxData').then(({ rows }) => {
            rows.forEach((row, index) => {
                cy.log(`Processing row ${index + 1}: Username = ${row.username}, Password = ${row.password}`);

                // Enter username and password
                cy.get("#input-username").clear().type(row.username || "demo"); // Default to "demo" if username is missing
                cy.get("#input-password").clear().type(row.password || "demo"); // Default to "demo" if password is missing

                // Click on the Login button
                // cy.get("button[type='submit']").click();

                // Validate login
                // Add validation steps as needed

                // Optionally log out or reload the page for the next iteration
                // Example: cy.reload(); or cy.get('#logout-button').click();
            });
        });
    });
});
