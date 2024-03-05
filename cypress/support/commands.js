Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Juan");
  cy.get("#lastName").type("Freire");
  cy.get("#email").type("teste@gmail.com");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});
