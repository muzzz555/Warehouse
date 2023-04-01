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
    it("passes", () => {
      cy.get().click()

    });
  });
});
