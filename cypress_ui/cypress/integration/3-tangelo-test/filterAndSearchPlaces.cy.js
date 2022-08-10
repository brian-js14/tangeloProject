describe("Login page", function () {
  beforeEach(() => {
    cy.visit("http://demo.testim.io");
  });
  /*
  Se seleccionan las fechas a realizar el viaje, fecha de partida,
  fecha de regreso y se adiciona el número de pasajeros segmentado por 
  niños y adultos
  */
  it("TC -> Select date depating and returning", () => {
    cy.get("input").first().click();
    cy.get(".theme__day___3cb3g").contains("21").click();
    cy.get("button").contains("Ok").click();
    cy.get('[value="Adults (18+)"]').click();
    cy.get("li").eq(3).click();
    //validación de los valores ingresados
    cy.get("input").eq(2).should("have.value", 2);
    cy.get('[value="Children (0-7)"]').click();
    cy.get("li").eq(7).click();
    cy.get("input").eq(3).should("have.value", 1);
    cy.wait(2000);
    cy.get("button").contains("Select Destination").click();
  });
  it("TC -> Select destination filters [Launch - Planet Color - Cash]", () => {
    cy.get('[value="Launch"]').click();
    cy.get("li").contains("Babahoyo").click();
    cy.get('[value="Planet color"]').click();
    cy.get("li").contains("Blue").click();
    cy.wait(1000);
    //cy.get("button").contains("Book").click();
  });
  /*
  Movimiento de la barra de progreso
   */
  it("TC -> progress bar scroll", () => {
    cy.get(".theme__progress___xkm0P").trigger("change").click({ force: true });
  });
});
