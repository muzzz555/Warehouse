const LoginPass = () => {
  cy.visit("http://localhost:3000");
  cy.viewport(1920, 1080);
  cy.get('#username').type("mu")
  cy.get('#password').type("1234")
  cy.get('.MuiButton-contained').click()
  // cy.wait(2000)
}

export default LoginPass;
