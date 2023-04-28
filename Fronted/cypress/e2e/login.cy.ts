describe("Login", () => {
  context("1920*1080 Viewport", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.localStorage.setItem("TOKEN", "1234");
            win.localStorage.removeItem("TOKEN")
          });
      cy.visit("http://localhost:3000");
      cy.viewport(1920, 1080);
    });

    it("Login_01", () => {
      cy.get('#username').type("mu")
      cy.get('#password').type("1234")
      cy.get('.MuiButton-contained').click()
      cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
    });

    it("Login_02", () => {
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

    it("Login_03", () => {
      cy.get('#password').type('1234')
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

    it("Login_04", () => {
      cy.get('#username').type('mu')
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

    it("Login_05", () => {
      cy.get('#username').type('poo')
      cy.get('#password').type('789')
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

    it("Login_06", () => {
      cy.get('#username').type('mu')
      cy.get('#password').type('789')
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

    it("Login_07", () => {
      cy.get('#username').type('poo')
      cy.get('#password').type('1234')
      cy.get('.MuiButton-contained').click()
      cy.should("not.have.text", "For Project Software Testing in KMITL")
    });

  });
});
