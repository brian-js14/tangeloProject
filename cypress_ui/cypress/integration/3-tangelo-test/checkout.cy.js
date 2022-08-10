describe("Checkout - processs e2e - Login/Select/Checkout", function () {
  beforeEach(() => {
    cy.visit("http://demo.testim.io");
  });
  it("TC-> Checkout e2e - create order", () => {
    /**
     * Se realiza login con usuario registrado
     */
    cy.log("Ingresando los datos del usuario: user-password");
    cy.get("button").first().click();
    cy.get("#login").within(() => {
      cy.get("input").first().type("JOHN");
      cy.get('input[type="password"]').type("123456");
    });
    cy.wait(1000);
    cy.get("button[type='submit']").click();
    /*
    Se ingresan fechas y datos relevantes al # de pasajeros
     */
    cy.log("Validación de fechas y cantidad de pasajeros");
    cy.get("input").first().click();
    cy.get(".theme__day___3cb3g").contains("15").click();
    cy.get("button").contains("Ok").click();
    cy.get('[value="Adults (18+)"]').click();
    cy.get("li").eq(3).click();
    cy.get("input").eq(2).should("have.value", 3);
    cy.get('[value="Children (0-7)"]').click();
    cy.get("li").eq(6).click();
    cy.get("input").eq(3).should("have.value", 1);
    cy.wait(1000);
    cy.get("button").contains("Select Destination").click();
    /*
    Escogiendo planeta, color y presupuesto
    */
    cy.log("Se escoge el planeta y color:");
    cy.get('[value="Launch"]').click();
    cy.get("li").contains("Tongli").click();
    cy.get('[value="Planet color"]').click();
    cy.get("li").contains("Blue").click();
    cy.wait(1000);
    cy.log("Movimiento en la barra de progreso:");
    cy.get(".theme__progress___xkm0P").trigger("change").click({ force: true });
    cy.get("button").contains("Book").click();
    cy.wait(1000);
    /*
Ingresando al checkout:
*/
    cy.get("form").within(() => {
      cy.get("input").first().type("Brian");
      cy.get("input").eq(1).type("testing@qa.com");
      cy.get("input").eq(2).type("272-46-2011");
      cy.get("input").eq(3).type("(419) 555-0084");
    });
    cy.wait(1000);
    cy.get('[name="promo"]').type("TEST12");
    /*
    se omite la excepción generada por el sitio web con el uncaught
    en valor en false, la excepción se genera al enviar el valor en el campo
    phone number de tipo tel, al generarse esta excepción el botón "pay now"
    no se activa y por ende no se envía la solicitud
    */
    cy.once("uncaught:exception", () => false);
    cy.get("button").contains("Apply").click();
    cy.get(".theme__check___2B20W").click();
    cy.wait(2000);
    cy.get("button").contains("Pay now");
  });
});
