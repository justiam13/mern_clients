describe('Home page test',()=>{
    it('Check The Input Field',()=>{
        cy.visit('/')
        cy.get('input').type('Dhoni')
        cy.get('button').should('be.visible')
        
        cy.get('button').click()
        cy.contains('Welcome,Dhoni')
        cy.get('input').should('have.value','Dhoni')
    })
})