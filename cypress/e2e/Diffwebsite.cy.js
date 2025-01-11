describe('popup', () =>{
    before(() =>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
    })
    it.only('Alert first way', ()=>{
        cy.on('window:alert',alertText => {
            expect(alertText).to.eql("I'm an Alert Box")
        })
        cy.get("button#alert").click()
    })
    it('Alert - Second Way - Multiple Alerts',() =>{
        const fn = cy.stub()
        cy.on('window:alert',fn)
        cy.get('button#miltiplealert').click().then(()=>{
            expect(fn.getCall(0)).to.be.calledOnceWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledOnceWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledOnceWithExactly('Third Alert Box')
        })
    })
    it('Confirm Alerts', () => {
        cy.on('window:alert', confirmTxt =>{
            expect(confirmTxt).to.eql("I'm a Confirm Box")
            return false
        })
        cy.get("#confirm").click() 
    })
    it('prompt', () => {
        // Stub the window.prompt method and define its return value
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('swathi');
        });
    
        // Trigger the action that opens the prompt
        cy.get("button#prompt").click();
    });
    it('windowpopup', ()=>{
        const pop_url = "https://www.youtube.com/c/qaboxletstest/"
        cy.window().then(win =>{
            const stub = cy.stub(win, 'open').as("windowopen")
        })
        cy.get("button#winpop").click();
        cy.get('@windowopen').should('be.calledWith',pop_url )
    })
    
        
})

describe('popup', () =>{
    before(() =>{
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
    })
    it.only('Alert first way', ()=>{
        cy.on('window:alert',alertText => {
            expect(alertText).to.eql("I'm an Alert Box")
        })
        cy.get("button#alert").click()
    })
    it('Alert - Second Way - Multiple Alerts',() =>{
        const fn = cy.stub()
        cy.on('window:alert',fn)
        cy.get('button#miltiplealert').click().then(()=>{
            expect(fn.getCall(0)).to.be.calledOnceWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledOnceWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledOnceWithExactly('Third Alert Box')
        })
    })
    it('Confirm Alerts', () => {
        cy.on('window:alert', confirmTxt =>{
            expect(confirmTxt).to.eql("I'm a Confirm Box")
            return false
        })
        cy.get("#confirm").click() 
    })
    it('prompt', () => {
        // Stub the window.prompt method and define its return value
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('swathi');
        });
    
        // Trigger the action that opens the prompt
        cy.get("button#prompt").click();
    });
    it('windowpopup', ()=>{
        const pop_url = "https://www.youtube.com/c/qaboxletstest/"
        cy.window().then(win =>{
            const stub = cy.stub(win, 'open').as("windowopen")
        })
        cy.get("button#winpop").click();
        cy.get('@windowopen').should('be.calledWith',pop_url )
    })
    
        
})


