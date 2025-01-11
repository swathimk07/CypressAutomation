// Hooks - before, after, beforeEach, afterEach (derived from Mocha framework)
// Usage: To specify any prerequisite or cleanup actions for test execution
describe('hooks', () => {
    before(() => {
      cy.log("launch application"); // Log a custom message to the Cypress Test Runner's Command Log
    });
  
    after(() => {
      cy.log("close app");
    });
  
    beforeEach(() => {
      cy.log("login");
    });
  
    afterEach(() => {
      cy.log("logout");
    });
  
    it('search', () => {
      cy.log("searching");
    });
  
    it.skip('Advance search', () => { // 'skip' is used to skip this specific test block
      cy.log("advanced searching");
    });
  
    it.only('listing products', () => { // 'only' ensures that only this test block is executed
      cy.log("listing products");
    });
  });
  