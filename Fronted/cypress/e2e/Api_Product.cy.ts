class AllStock {
  status?: Number;
  body?: any;
}

class Stock {
  status?: Number;
  body?: any;
}

const expectedResponse = [
  "id",
  "name",
  "image",
  "price",
  "stock",
  "createdAt",
  "updatedAt",
];

describe("Test Case Api", () => {
  it("API_Get_Products", () => {
    const option = {
      method: "GET",
      url: "http://localhost:8085/api/v2/stock/product",
    };
    cy.request(option).as("response");
    cy.get<AllStock>("@response").should((res) => {
      expect(res.status).eq(200);
      res.body.forEach((item: any) => {
        expect(item).to.have.all.keys(
          "id",
          "name",
          "image",
          "price",
          "stock",
          "createdAt",
          "updatedAt"
        );
      });
    });
  });

  it("API_Get_Products_By_Id", () => {
    const option = {
      method: "GET",
      url: "http://localhost:8085/api/v2/stock/product/101",
    };
    cy.request(option).as("response");
    cy.get<Stock>("@response").should((res) => {
      expect(res.status).eq(200);
      const actualResponse = Object.keys(res.body);
      expect(actualResponse.length).to.eq(7);
      expectedResponse.forEach((property) => {
        expect(actualResponse).to.include(property);
      });
    });
  });

  it("API_Get_Products_By_Keyword", () => {
    const option = {
      method: "GET",
      url: "http://localhost:8085/api/v2/stock/product/keyword/StockName05",
    };
    cy.request(option).as("response");
    cy.get<Stock>("@response").should((res) => {
      expect(res.status).eq(200);
      res.body.forEach((item: any) => {
        expect(item).to.have.all.keys(
          "id",
          "name",
          "image",
          "price",
          "stock",
          "createdAt",
          "updatedAt"
        );
      });
    });
  });
})