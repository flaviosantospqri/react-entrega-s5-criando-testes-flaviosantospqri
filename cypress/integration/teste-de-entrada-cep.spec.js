

context("Cep",() =>{
    it("enter de code number and find andress", () =>{
    cy.visit('http://localhost:3001/')
    cy.viewport(1440,900)
    cy.get('input[type="number"]')
    .should('be.visible')
    .type(36610000)
    cy.contains("Buscar pelo CEP").click()
    })
    
})