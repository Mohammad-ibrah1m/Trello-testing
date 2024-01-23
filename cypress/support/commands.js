// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (url) => {
  const email = "mohammads.ibrahim0@gmail.com";
  cy.intercept("https://trello.com/1/resources/templates/categories").as("login");
  cy.visit(url);
  cy.get("#user").clear().type(email);
  cy.get("#login").click();
  cy.wait(3000);
  cy.origin("https://id.atlassian.com", () => {
    cy.get("#password").clear().type("m7mmad_99#$");
    cy.get("#login-submit").click();
  });
  cy.wait("@login");
});
