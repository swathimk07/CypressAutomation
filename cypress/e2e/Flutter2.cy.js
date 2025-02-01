describe('Flutter Web App Interaction', () => {
  it('should load the Flutter app and interact with its elements', () => {
    // Visit the Flutter web app
    cy.visit('https://flutter-web-avanti-dot-indihood-qa-in.appspot.com', {
      timeout: 20000  // Increase timeout to allow for Flutter app initialization
    });

    // Wait for flutter-view element to appear
    cy.get('flutter-view', { timeout: 10000 })  // Wait up to 10 seconds
      .should('exist')  // Ensure flutter-view exists
      .should('have.prop', 'shadowRoot')  // Ensure shadow root is present
      .shadow()  // Access the shadow DOM of flutter-view
      .find('flt-glass-pane')  // Find flt-glass-pane inside shadow DOM
      .should('exist')  // Ensure the element exists inside the shadow DOM
      .shadow()  // Access the shadow DOM of flt-glass-pane
      .find('flt-platform-view')  // Find flt-platform-view inside the next shadow DOM
      .should('be.visible');  // Ensure the element is visible
  });

  it('should navigate to the next page after clicking a link', () => {
    // Ensure the shadow DOM and required elements are available before interaction
    cy.get('flutter-view', { timeout: 10000 })  // Wait for flutter-view element
      .should('exist')  // Ensure it exists
      .should('have.prop', 'shadowRoot')  // Ensure shadow root is available
      .shadow()  // Access the shadow DOM
      .find('flt-glass-pane')  // Find the flt-glass-pane element
      .should('exist')  // Ensure it exists inside the shadow DOM
      .shadow()  // Access shadow DOM inside flt-glass-pane
      .find('a')  // Find link inside the shadow DOM
      .contains('Next Page')  // Find link with text 'Next Page'
      .click();  // Click the link to navigate

    // Verify that navigation occurred (adjust URL as necessary)
    cy.url().should('include', '/next-page');
  });
});