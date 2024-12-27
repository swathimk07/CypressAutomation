describe('capturess', ()=>{
    it('captures', ()=>{
        cy.visit("https://www.opencart.com/")
        /*cy.screenshot("home") //capture ss\
        cy.wait(2000)
       cy.get("img[title='OpenCart - Open Source Shopping Cart Solution']").screenshot("logo")//ss of specific element */

        //automatically capture ss and video on failure - only when execute through cmp propmt
        cy.get("body > header:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click()
        cy.get("img[alt='Open Cloud Store']").should('have.text',"swathi")

    })
})