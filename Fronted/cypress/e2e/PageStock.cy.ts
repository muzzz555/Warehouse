describe("template spec", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem("TOKEN", "1234");
    });
    cy.viewport(1920, 1080);
    
  });

  it("Passes", () => {
    cy.visit("http://localhost:3000/stock");
  });
});
