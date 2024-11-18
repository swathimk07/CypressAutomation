describe("assertions", ()=>{

    it("implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //should and

        //cy.url().should('include','orangehrmlive.com') //checking the text in the provided URL
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //checking the URL
        //cy.url().should('contain','orangehrm')

        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include','orangehrmlive.com')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //checking the URL
       .and('contain','orangehrm')
       .and('not.contain','greenhrm')
       //be.visible - one more assertion
       cy.get("input[placeholder='Username']").type("Admin") //provide value to text box
       cy.get("input[placeholder='Username']").should('have.value','Admin')
       

    })

    it("explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        //javascript for explict assertions
        let expName="manda user" //let is a keyword used in js to define any variable
        cy.get(".oxd-userdropdown-name").then( (x) =>{ //variable of name copied to x
        let actName=x.text //using x parameter into body of the method
        //BDD style we use expect keyword
          expect(actName).to.eq(expName)
          expect(actName).to.not.eq(expName)

        //TDD style use assert keyword
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)

        })
    })
})