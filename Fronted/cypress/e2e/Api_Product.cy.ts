class AllStock {
  status?: Number;
  body?: [];
}

describe("template spec", () => {
  it("passes", () => {
    const option = {
      method: "GET",
      url: "http://localhost:8085/api/v2/stock/product",
    };
    cy.request(option).as("response");

    cy.get<AllStock>("@response").should((res) => {
      expect(res.status).eq(200);
      expect(res)
        .to.have.nested.property("body[0]")
        .that.includes.all.keys([
          "id",
          "name",
          "image",
          "price",
          "stock",
          "createdAt",
          "updatedAt",
        ]);
    });
  });
});

// it('passes', () => {
//   const option = {
//     method:"GET",
//     url:"http://localhost:8085/api/v2/stock/product"
//   }
//   cy.request(option).as('response')

//   cy.get('@response').should((res) => {
//     expect(res.status).eq(200)
//     expect(res.body).to.deep.eq({
//     })
//   })
// })

