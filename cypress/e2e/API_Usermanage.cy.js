context('APIAutomation', () => {

    it('GET - List Users', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            // Assert the response status and data
            expect(response.status).to.equal(200);
            expect(response.body.data[0].last_name).to.equal('Lawson');
        });
    });

    it('POST - Create User', () => {
        const user = {
            "name": "morpheus",
            "job": "leader"
        };
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            // Assert the response status and body data
            expect(response.status).to.equal(201);
            expect(response.body.name).to.equal(user.name);
            expect(response.body.job).to.equal(user.job);
        });
    });

    it('PUT - Update User', () => {
        const updatedUser = {
            "name": "morpheus",
            "job": "zion resident"
        };
        cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
            // Assert the response status and updated data
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal(updatedUser.name);
            expect(response.body.job).to.equal(updatedUser.job);
        });
    });

    it('DELETE - Delete User', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            // Assert the response status for deletion
            expect(response.status).to.equal(204);
        });
    });

});
