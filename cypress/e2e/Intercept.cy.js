<<<<<<< HEAD
describe('intercept', ()=>{
    it('Intercept', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/posts'
        }).as('posts')

    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()

    cy.wait('@posts').then((interception) => {
        cy.log('Intercepted Response: ' + JSON.stringify(interception))
        console.log('Intercepted Response:', interception)
        expect(interception.response.body).to.have.length(100)
    
    })
})


it('Mocking with Intercept Static Response', () => {

    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.intercept('GET', '/posts', {body: { totalPost: 5, name: 'swathi m k' }}).as('getPosts')
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
    cy.wait('@getPosts')
    
})

it('Mocking with Intercept Dynamic fixture', () => {

    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.fixture('example.json').then((data) => {
    
        cy.intercept('GET', '/posts', { body: data }).as('getPosts')
    })

    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
    cy.wait('@getPosts')
})


=======
describe('intercept', ()=>{
    it('Intercept', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path : '/posts'
        }).as('posts')

    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()

    cy.wait('@posts').then((interception) => {
        cy.log('Intercepted Response: ' + JSON.stringify(interception))
        console.log('Intercepted Response:', interception)
        expect(interception.response.body).to.have.length(100)
    
    })
})


it('Mocking with Intercept Static Response', () => {

    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.intercept('GET', '/posts', {body: { totalPost: 5, name: 'swathi m k' }}).as('getPosts')
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
    cy.wait('@getPosts')
    
})

it('Mocking with Intercept Dynamic fixture', () => {

    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.fixture('example.json').then((data) => {
    
        cy.intercept('GET', '/posts', { body: data }).as('getPosts')
    })

    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
    cy.wait('@getPosts')
})


>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
})