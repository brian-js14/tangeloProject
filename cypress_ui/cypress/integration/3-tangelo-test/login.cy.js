describe("Login page", function () {
  beforeEach(() => {
    cy.visit("http://demo.testim.io");
  });
  /*
  Validación de login al usuario sin ingresar username y
  password, se crean aserciones para los labels de los
  campos que deben ser llenados
  */
  it("TC-> Login fail with user and password empty", () => {
    const getError = ".theme__error___3ilni";
    cy.get("button").first().click();
    cy.get("button[type='submit']").click();
    cy.get(getError).eq(0).should("contain", "Name is a required field.");
    cy.get(getError).eq(1).should("contain", "Password is a required field.");
  });
  //El botón cancelar del login debe retornar al home
  it("TC-> Cancel button in login", () => {
    cy.get("button").first().click();
    cy.get("form").find("input").should("have.length", 3);
    cy.get("button").contains("Cancel").click();
  });
  /*Ingreso satisfactorio con el usuario y contraseña seteados en
  el input, el usuario se debe loguear correctamente y navegar hasta
  el home*/
  it("TC-> login with user and password", () => {
    cy.get("button").first().click();
    cy.get("#login").within(() => {
      cy.get("input").first().type("JOHN");
      cy.get('input[type="password"]').type("123456");
    });
    cy.get('[tabindex="1"]').should("have.value", "JOHN");
    cy.get("button[type='submit']").click();
  });
});
