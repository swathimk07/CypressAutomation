<<<<<<< HEAD
import LoginPage from "./PageObject/LoginPage"
describe('POM', ()=>
{
   it('POM',()=>{
     const lp = new LoginPage()
     lp.visit()
     lp.fillemail('DK')
     lp.fillpassword('admin')
     lp.Submit()
     cy.title().should('be.equal', 'Employee Information Portal')
   })
=======
import LoginPage from "./PageObject/LoginPage"
describe('POM', ()=>
{
   it('POM',()=>{
     const lp = new LoginPage()
     lp.visit()
     lp.fillemail('DK')
     lp.fillpassword('admin')
     lp.Submit()
     cy.title().should('be.equal', 'Employee Information Portal')
   })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})