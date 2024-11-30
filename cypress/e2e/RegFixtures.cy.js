describe('fixtures', ()=>{
    before(function () {
        cy.fixture('Registration form').then((data) => {
            this.data = data; // Assigning fixture data to `this`
        });
    });
        
    it('fixture', function (){
       cy.visit('https://mytestingthoughts.com/Sample/home.html')
       cy.get("input[placeholder='First Name']").type(this.data.FirstName)
       cy.get("input[placeholder='Last Name']").type(this.data.LastName)
       cy.get("input[type='radio'][id='inlineRadioFemale']").check(this.data.Gender)
       cy.get("select[id='exampleFormControlSelect2']").select(this.data.Hobbies[1]);
       cy.get("select[name='department']").select(this.data.Department[2]);
       cy.get("input[placeholder='Username']").type(this.data.Username)
       cy.get("input[placeholder='Password']").type(this.data.Password)
       cy.get("input[placeholder='Confirm Password']").type(this.data.CnfPwd)
       cy.get("input[placeholder='E-Mail Address']").type(this.data.Email)
       cy.get("input[placeholder='(639)']").type(this.data.ContactNo)
       cy.get("textarea[id='exampleFormControlTextarea1']").type(String(this.data.add))
       cy.get("button[type='submit']").click()
       
        
    })
})