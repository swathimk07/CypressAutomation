describe('dragdrop', ()=>{
    it('dragdrop', ()=>{
        cy.visit('https://practice.expandtesting.com/drag-and-drop')
        cy.get('#column-a').drag('#column-b')
  
    })
})