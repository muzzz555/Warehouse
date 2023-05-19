describe("register", () => {
  context("Test Case Register", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/register");
      cy.viewport(1920, 1080);
    });

    it.skip("Register_01", () => {
      cy.get('#username').type("mu")
      cy.get('#password').type("1234")
      cy.get('.MuiButton-contained').click()
      cy.get('.MuiTypography-root').should("contain","Login");
    });
    it("Register_02", () => {
      cy.get('.MuiButton-contained').click()
      cy.get('.css-ncjbhz').should("not.have.text", "Please fill out this field.");
    });
    it("Register_03", () => {
      cy.get('#password').type("1234")
      cy.get('.MuiButton-contained').click()
      cy.get('.css-ncjbhz').should("not.have.text", "Please fill out this field.");
    });
    it("Register_04", () => {
      cy.get('#username').type("mu")
      cy.get('.MuiButton-contained').click()
      cy.get('.css-ncjbhz').should("not.have.text", "Please fill out this field.");
    });
    
  });
});