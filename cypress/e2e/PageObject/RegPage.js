class Regpage{
    visit()
    {
        cy.visit("https://mytestingthoughts.com/Sample/home.html")
    }
    Fname(value)//action method
    {
     const field=cy.get('input[placeholder="First Name"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Lname(value)//action method
    {
     const field=cy.get('input[placeholder="Last Name"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Gender(value)//action method
    {
     const field=cy.get('#inlineRadioFemale').check() //const field is a variable declaration in java script
     //field.clear()                        //page elements
     //field.type(value)
     return this //representing the class
    }
    Hobbies(value)//action method
    {
     const field=cy.get('#exampleFormControlSelect2').select('Reading') //const field is a variable declaration in java script
     //field.clear()                        //page elements
     //field.type(value)
     return this //representing the class
    }
    Dept(value)//action method
    {
     const field=cy.get('select[name="department"]').select('MPDC') //const field is a variable declaration in java script
     //field.clear()                        //page elements
     //field.type(value)
     return this //representing the class
    }
    username(value)//action method
    {
     const field=cy.get('input[placeholder="Username"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Password(value)//action method
    {
     const field=cy.get('input[placeholder="Password"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Confpassword(value)//action method
    {
     const field=cy.get('input[placeholder="Confirm Password"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Email(value)//action method
    {
     const field=cy.get('input[placeholder="E-Mail Address"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Contact(value)//action method
    {
     const field=cy.get('input[placeholder="(639)"]') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    AddInfo(value)//action method
    {
     const field=cy.get('#exampleFormControlTextarea1') //const field is a variable declaration in java script
     field.clear()                        //page elements
     field.type(value)
     return this //representing the class
    }
    Submit(value)//action method
    {
     const button=cy.get('button[type=submit]') //const field is a variable declaration in java script
     button.click()
    }

}

export default Regpage