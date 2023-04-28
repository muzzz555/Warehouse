import LoginPass from "../support/login";

describe("template spec", () => {
  // beforeEach(() => {
  //   cy.window().then((win) => {
  //     win.localStorage.setItem("TOKEN", "1234");
  //   });
  //   cy.viewport(1920, 1080);
    
  // });

  

  before(() => {
    LoginPass()
  })

  it("Passes", () => {
    cy.get('.MuiFab-root').click()
  });
});
