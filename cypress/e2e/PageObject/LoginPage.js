class Loginpage
{
    visit()
    {
        cy.visit("https://desicrewdtrial.crystalhr.com/")
    }
    fillemail(value)//action method
    {
     const field=cy.get("#Username") //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    fillpassword(value)
    {
        const field=cy.get('#Password')
        field.clear()
        field.type(value)
        return this
    }
    Submit(value)
    {
        const button = cy.get('#btnLogin')
        button.click()
    }

   
} 
export default Loginpage