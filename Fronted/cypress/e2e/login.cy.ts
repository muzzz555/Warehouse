describe("Login", () => {
  context("1920*1080 Viewport", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      // cy.viewport(1280, 720)
      // cy.viewport(1366, 768)
      cy.visit("http://localhost:3000");
      cy.viewport(1920, 1080);
    });
    it("Passes", () => {
      // cy.get().click()
      cy.get('#username').type("mu")
      cy.get('#password').type("1234")
      cy.get('.MuiButton-contained').click()
    });
    it("Fail", () => {
      // cy.get().click()
      cy.get('#username').type("mu")
      cy.get('.MuiButton-contained').click()
    });
  });
});
