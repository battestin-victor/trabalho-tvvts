import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Entro no google", () => {
    cy.visit("https://google.com.br/");
    cy.title().should('eq', 'Google');
});

When("Busco por cypress", () => {
    cy.get('textarea[title="Pesquisar"]').type('Cypress{enter}');
});

Then("Devo ver conteúdos sobre cypress", () => {
    cy.title().should('eq', 'Cypress - Pesquisa Google');
});