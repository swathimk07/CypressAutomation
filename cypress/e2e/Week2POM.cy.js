import LoginPage from "./PageObject/LoginPage";

describe('POM', () => {
  it('POM', () => {
    const lp = new LoginPage();
    lp.visit();
    lp.fillemail('DK');
    lp.fillpassword('admin');
    lp.Submit();
    cy.title().should('be.equal', 'Employee Information Portal');
  });
});
