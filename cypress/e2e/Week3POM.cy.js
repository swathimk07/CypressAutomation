import RegPage from "./PageObject/RegPage"
describe('POM', ()=>
    {
       it('POM',()=>{
         const rp = new RegPage()
         rp.visit()
         rp.Fname('swathi')
         rp.Lname('MK')
         rp.Gender()
         rp.Hobbies()
         rp.Dept()
         rp.username("swathimk09")
         rp.Password("cloud202")
         rp.Confpassword("cloud202")
         rp.Email("swathi@gmail.com")
         rp.Contact("919876789833")
         rp.AddInfo("thanks")
         rp.Submit()

       })
    })