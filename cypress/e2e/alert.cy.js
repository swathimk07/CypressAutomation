// JavaScript Alerts Testing
describe('alerts', () => {

    // JavaScript Alert
    it('js alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Trigger JS Alert
        cy.get("button[onclick='jsAlert()']").click();
        
        // Validate alert text
        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am a JS Alert");
        });
    });

    // JavaScript Confirmation Alert
    it('js confirm alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Trigger JS Confirm Alert
        cy.get("button[onclick='jsConfirm()']").click();
        
        // Validate confirm alert text
        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm");
        });
        
        // Click on Cancel (set to false)
        cy.on('window:confirm', () => false);
    });

    // JavaScript Prompt Alert
    it('js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        // Stub the window prompt and provide input text
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        });

        // Trigger JS Prompt Alert
        cy.get("button[onclick='jsPrompt()']").click();
        
        // Add validation or actions here as needed
    });

});
