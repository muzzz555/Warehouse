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

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  it.skip('AddStock_01', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName01")
    // cy.get('input[type=file]')
    cy.get('#files').selectFile('cypress/fixtures/Image01.jpeg')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
  })

<<<<<<< Updated upstream
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


  it.skip('AddStock_29', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName29")
    cy.get('input[name="price"]').clear()
    cy.get('#files').selectFile('cypress/fixtures/Image29.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text","Min price is not lower than 100")
  })
  it.skip('AddStock_30', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName30")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_31', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('#files').selectFile('cypress/fixtures/Image31.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_31', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('#files').selectFile('cypress/fixtures/Image31.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_32', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })


  it.skip('AddStock_33', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName33")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('#files').selectFile('cypress/fixtures/Image33.jpg')
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_34', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName34")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_35', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('#files').selectFile('cypress/fixtures/Image35.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_36', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("5")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })
  
  it.skip('AddStock_37', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName37")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('#files').selectFile('cypress/fixtures/Image37.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_38', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName38")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("2000")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_39', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName39")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('#files').selectFile('cypress/fixtures/Image39.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_40', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName40")
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_41', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('#files').selectFile('cypress/fixtures/Image41.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_42', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it.skip('AddStock_43', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("5")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('#files').selectFile('cypress/fixtures/Image43.jpg')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

  it('AddStock_44', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("5")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("text")
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiCardContent-root > :nth-child(2)').should("contain","Enter name")
    cy.get('.MuiFormHelperText-root').should("contain","Min price is not lower than 100")
    cy.get('.MuiFormHelperText-root').should("contain","Min stock is not lower than 10")
  })

=======
  it.skip('AddStock_02', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName02")
    cy.get('input[name="price"]').clear()
    // cy.get('input[type=file]')
    cy.get('input[name="price"]').type("5000")
    cy.get('#files').selectFile('cypress/fixtures/Image02.jpg')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
  })

  it.skip('AddStock_03', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName03")
    cy.get('input[name="stock"]').clear()
    // cy.get('input[type=file]')
    cy.get('input[name="stock"]').type("1000")
    cy.get('#files').selectFile('cypress/fixtures/Image03.jpg')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
  })

  it.skip('AddStock_04', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName04")
    cy.get('input[name="price"]').clear()
    // cy.get('input[type=file]')
    cy.get('input[name="price"]').type("5000")
    cy.get('input[name="stock"]').clear()
    cy.get('input[name="stock"]').type("1000")
    cy.get('#files').selectFile('cypress/fixtures/Image04.jpg')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
>>>>>>> Stashed changes
})
    
  it.skip('AddStock_05', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName05")
    //cy.get('#files').selectFile('""')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiToolbar-root > .css-pf6rjo-MuiTypography-root').should("have.text", "For Project Software Testing in KMITL")
  })

  it.skip('AddStock_06', () => {
    cy.get('.MuiFab-root').click()
    //cy.get('input[name="name"]').type("StockName05")
    cy.get('#files').selectFile('cypress/fixtures/Image06.jpg')
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Enter name")
  })

  it.skip('AddStock_07', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName07")
    cy.get('#files').selectFile('cypress/fixtures/Image07.jpg')
    cy.get('input[name="price"]').clear()
    //cy.get('input[name="price"]').type("")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Min price is not lower than 100")
  })

  it.skip('AddStock_08', () => {
    cy.get('.MuiFab-root').click()
    //cy.get('input[name="name"]').type("StockName07")
    cy.get('#files').selectFile('cypress/fixtures/Image08.jpg')
    cy.get('input[name="price"]').clear()
    //cy.get('input[name="price"]').type("")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Enter nameMin price is not lower than 100")
  })

  it.skip('AddStock_09', () => {
    cy.get('.MuiFab-root').click()
    //cy.get('input[name="name"]').type("StockName07")
    //cy.get('#files').selectFile('cypress/fixtures/Image08.jpg')
    cy.get('input[name="price"]').clear()
    //cy.get('input[name="price"]').type("")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Enter nameMin price is not lower than 100")
  })

  it('AddStock_10', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName10")
    cy.get('#files').selectFile('cypress/fixtures/Image10.jpg')
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Min price is not lower than 100")
  })

  it('AddStock_11', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName11")
    //cy.get('#files').selectFile('cypress/fixtures/Image10.jpg')
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Min price is not lower than 100")
  })
  
  it('AddStock_12', () => {
    cy.get('.MuiFab-root').click()
    //cy.get('input[name="name"]').type("StockName11")
    cy.get('#files').selectFile('cypress/fixtures/Image12.jpg')
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Enter nameMin price is not lower than 100")
  })

  it('AddStock_13', () => {
    cy.get('.MuiFab-root').click()
    //cy.get('input[name="name"]').type("StockName11")
    //cy.get('#files').selectFile('cypress/fixtures/Image12.jpg')
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("50")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Enter nameMin price is not lower than 100")
  })

  it.only('AddStock_14', () => {
    cy.get('.MuiFab-root').click()
    cy.get('input[name="name"]').type("StockName14")
    cy.get('#files').selectFile('cypress/fixtures/Image14.jpg')
    cy.get('input[name="price"]').clear()
    cy.get('input[name="price"]').type("text")
    // cy.get('input[type=file]').selectFile('cypress/fixtures/file.json')
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiFormHelperText-root').should("have.text", "Min price is not lower than 100")
  })




})})
