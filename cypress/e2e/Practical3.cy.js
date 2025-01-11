Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });
describe("P3", ()=>{
    it("Interaction with elements", ()=>{
     cy.visit("https://ultimateqa.com/automation")
     cy.get("a[href='../simple-html-elements-for-automation/']").click()
     cy.get("#button1").click()
     cy.get(".et_pb_button.et_pb_button_0.et_pb_bg_layout_light").click()
     cy.go("back");

    })
})