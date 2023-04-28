describe('template spec', () => {
  it('Test Title', () => {
    cy.visit("http://localhost:3000");
    cy.title().should('include', 'Testing')
  })
})