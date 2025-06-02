/// <reference types="cypress" />
/// <reference types="mocha" />

import LoginPage from "../pages/LoginPage";
describe('theme', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
  });

  it('Change theme', () => {
    cy.get('button[data-testid="home-login-button"]').should('be.visible').click({ force: true })
    LoginPage.successLogin()
    cy.themechange()
  })
 
})

