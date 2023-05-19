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


  it.skip('AddStock_01', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName01")
    // cy.get('input[type=file]')
    cy.get('#files').selectFile('cypress/fixtures/Coke.png')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
  })

  it.skip('AddStock_15' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="name"]').type("StockName14")
    cy.get('input[name="price"]').type("text")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Min price is not lower than 100")
  })
  it.skip('AddStock_16' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("text")
    cy.get('#files').selectFile('cypress/fixtures/Image16.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
    
  })
  it.skip('AddStock_17' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("text")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
 
  })
  it.skip('AddStock_18' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('#files').selectFile('cypress/fixtures/Image18.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")

  })
  it.skip('AddStock_19' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_20' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="name"]').type("StockName20")
    cy.get('#files').selectFile('cypress/fixtures/Image20.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_21' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="name"]').type("StockName21")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_22' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="name"]').type("StockName21")
    cy.get('input[name="price"]').type("2000")
    cy.get('#files').selectFile('cypress/fixtures/Image22.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_23' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="name"]').type("StockName21")
    cy.get('input[name="price"]').type("2000")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_24' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('#files').selectFile('cypress/fixtures/Image24.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_25' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_26' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="name"]').type("StockName26")
    cy.get('input[name="price"]').type("2000")
    cy.get('input[name="stock"]').type("2")
    cy.get('#files').selectFile('cypress/fixtures/Image26.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it.skip('AddStock_27' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('input[name="stock"]').type("5")
    cy.get('#files').selectFile('cypress/fixtures/Image27.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })
  it('AddStock_28' , () =>{
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain", "Min stock is not lower than 10")
    
  })





  
  
  })
})