import LoginPass from "../support/login";

describe("template spec", () => {
  context("Test Case Edit", () => {
   

    beforeEach(() => {
      LoginPass();
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('input[name="name"]').type("StockNameDummy");
      cy.get('input[name="price"]').clear()
      cy.get('input[name="price"]').type("3000");
      cy.get('input[name="stock"]').clear()
      cy.get('input[name="stock"]').type("2000");
      cy.get("#files").selectFile("cypress/fixtures/Image01.jpg");
      cy.get('.MuiButton-contained').click()
    });

    it.skip("AddStock_Dummy", () => {
      cy.get(".MuiFab-root").click();
      cy.get('input[name="name"]').type("StockNameDummy");
      cy.get("#files").selectFile("cypress/fixtures/Image01.jpg");
      cy.get(".MuiButton-contained").click();
      cy.get(".MuiToolbar-root > .css-pf6rjo-MuiTypography-root").should(
        "have.text",
        "For Project Software Testing in KMITL"
      );
    });

    it("Edit_01", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()

      cy.get('.MuiButton-contained').click()
      cy.get(".MuiToolbar-root > .css-pf6rjo-MuiTypography-root").should(
        "have.text",
        "For Project Software Testing in KMITL"
      );
      cy.get('[data-id="191"] > [data-field="name"]').should("have.text","StockNameDummy");
      cy.get('[data-id="191"] > [data-field="stock"]').should("have.text","2,000");
      cy.get('[data-id="191"] > [data-field="price"]').should("have.text","฿3,000.00");
    });


    it("Edit_02", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="price"]').clear();
      cy.get('input[name="price"]').type("4000");
      cy.get('.MuiButton-contained').click()
      cy.get('[data-id="191"] > [data-field="name"]').should("have.text","StockNameDummy");
      cy.get('[data-id="191"] > [data-field="stock"]').should("have.text","2,000");
      cy.get('[data-id="191"] > [data-field="price"]').should("have.text","฿4,000.00");

    });


    it("Edit_03", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('input[name="name"]').type("StockName123");
      cy.get('.MuiButton-contained').click()
      cy.get('[data-id="191"] > [data-field="name"]').should("have.text","StockName123");
      cy.get('[data-id="191"] > [data-field="stock"]').should("have.text","2,000");
      cy.get('[data-id="191"] > [data-field="price"]').should("have.text","฿3,000.00");
    });


    it("Edit_04", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get("#files").selectFile("cypress/fixtures/Image02.jpg");
      cy.get('.MuiButton-contained').click()
      cy.get('[data-id="191"] > [data-field="name"]').should("have.text","StockNameDummy");
      cy.get('[data-id="191"] > [data-field="stock"]').should("have.text","2,000");
      cy.get('[data-id="191"] > [data-field="price"]').should("have.text","฿3,000.00");
      cy.get('[data-id="191"] > [data-field="image"]').should('be.visible');
    });

    it("Edit_05", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('input[name="name"]').type("StockName124");
      cy.get('input[name="price"]').clear()
      cy.get('input[name="price"]').type("4000");
      cy.get('input[name="stock"]').clear()
      cy.get('input[name="stock"]').type("3000");
      cy.get("#files").selectFile("cypress/fixtures/Image02.jpg");
      cy.get('.MuiButton-contained').click()
      cy.get('[data-id="191"] > [data-field="name"]').should("have.text","StockName124");
      cy.get('[data-id="191"] > [data-field="stock"]').should("have.text","3,000");
      cy.get('[data-id="191"] > [data-field="price"]').should("have.text","฿4,000.00");
      cy.get('[data-id="191"] > [data-field="image"]').should('be.visible');
    });

    it("Edit_06", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="price"]').clear()
      cy.get('input[name="price"]').type("10");
      cy.get('.MuiButton-contained').click()
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min price is not lower than 100"
      );
    });

    it("Edit_07", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="stock"]').clear()
      cy.get('input[name="stock"]').type("9");
      cy.get('.MuiButton-contained').click()
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min stock is not lower than 10")
    });

    it("Edit_08", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('.MuiButton-contained').click()
      cy.get(".MuiCardContent-root > :nth-child(2)").should(
        "contain",
        "Enter name"
      );
    });

    it("Edit_09", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('input[name="price"]').clear()
      cy.get('input[name="stock"]').clear()
      cy.get("#files").selectFile("cypress/fixtures/Image09.jpg");
      cy.get('.MuiButton-contained').click()
      cy.get(".MuiCardContent-root > :nth-child(2)").should(
        "contain",
        "Enter name"
      );
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min price is not lower than 100"
      );
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min stock is not lower than 10"
      );
      cy.get('[style="margin: 16px;"] > img').should("be.visible");
    });

    it("Edit_10", () => {
      cy.get('[data-id="191"] > [data-field="."] > .css-m69qwo-MuiStack-root > [aria-label="edit"]').click()
      cy.get('input[name="name"]').clear()
      cy.get('input[name="name"]').type("Stock10");
      cy.get('input[name="price"]').clear()
      cy.get('input[name="price"]').type("text");
      cy.get('input[name="stock"]').clear()
      cy.get('input[name="stock"]').type("text");
      cy.get("#files").selectFile("cypress/fixtures/Image10.jpg");
      cy.get('.MuiButton-contained').click()
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min price is not lower than 100"
      );
      cy.get(".MuiFormHelperText-root").should(
        "contain",
        "Min stock is not lower than 10"
      );
      cy.get('[style="margin: 16px;"] > img').should("be.visible");
    });


  
  });
});
