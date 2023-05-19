describe("register", () => {
  context("Test Case Register", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/register");
      cy.viewport(1920, 1080);
    });

    it("Register_01", () => {
      cy.get('#username').type("mu")
      cy.get('#password').type("1234")
      cy.get('.MuiButton-contained').click()
      cy.get('.MuiTypography-root').should("contain","Login");
    });

  });
});