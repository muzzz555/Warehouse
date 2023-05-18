import LoginPass from "../support/login";

describe('template spec', () => {
  context("Test Case Login", () => {
    beforeEach(() => {
      // cy.window().then((win) => {
      //       win.localStorage.setItem("TOKEN", "1234");
      //       win.localStorage.removeItem("TOKEN")
      //     });
      // cy.viewport(1920, 1080);
      // cy.visit("http://localhost:3000");
      // cy.viewport(1920, 1080);
      // cy.get('#username').type("mu")
      // cy.get('#password').type("1234")
      // cy.get('.MuiButton-contained').click()
      LoginPass()
    });


  it('AddStock_01', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName01")
    // cy.get('input[type=file]')
    cy.get('#files').selectFile('cypress/fixtures/Coke.png')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
  })
})
})