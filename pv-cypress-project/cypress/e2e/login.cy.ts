/// <reference types="cypress" />
/// <reference types="mocha" />


import LoginPage from "../pages/LoginPage";
describe('login', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
  });

  it('Success login', () => {
    cy.get('button[data-testid="home-login-button"]').should('be.visible').click({ force: true })
    LoginPage.successLogin()
  })
 
})

