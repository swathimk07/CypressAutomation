require('cypress-xpath');
describe('xpathlocators', () =>{
    it('Xpath', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit - built in comm
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("password")
        cy.xpath("//button[normalize-space()='Login']").click();
    })
});