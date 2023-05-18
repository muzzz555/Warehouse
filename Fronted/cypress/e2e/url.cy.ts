describe('template spec', () => {
  it('Test URL', () => {
    cy.visit("http://localhost:3000");
    cy.url().should('include', 'login')
  })
})