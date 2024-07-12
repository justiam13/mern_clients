

//to write e2e test cases
describe('Open home page',()=>{
    it('Open home page',()=>{
        cy.visit('/')
        //cy.contains('Welcome')//it text is present in the document
        cy.contains('Register')
    
    })
})
