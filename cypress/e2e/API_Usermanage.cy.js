<<<<<<< HEAD
context('APIAutomation', ()=>{
    it('GET-List-user', ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200) //asserting the data
            expect(response.body.data[0].last_name).equal('Lawson')
        }) //request is used in API to open the site
    })
    it('POST-Create-user', ()=>{
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201) //asserting the data
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        }) //request is used in API to open the site
    })
    it('update user', ()=>{
        var user2 = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user2).then((response)=>{
            expect(response.status).equal(200) //asserting the data
            expect(response.body.name).equal(user2.name)
            expect(response.body.job).equal(user2.job)
        })
    })
    it('delete user', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })
=======
context('APIAutomation', ()=>{
    it('GET-List-user', ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200) //asserting the data
            expect(response.body.data[0].last_name).equal('Lawson')
        }) //request is used in API to open the site
    })
    it('POST-Create-user', ()=>{
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201) //asserting the data
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        }) //request is used in API to open the site
    })
    it('update user', ()=>{
        var user2 = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user2).then((response)=>{
            expect(response.status).equal(200) //asserting the data
            expect(response.body.name).equal(user2.name)
            expect(response.body.job).equal(user2.job)
        })
    })
    it('delete user', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
        })
    })
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})