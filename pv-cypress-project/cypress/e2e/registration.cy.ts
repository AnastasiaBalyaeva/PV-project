/// <reference types="cypress" />
/// <reference types="mocha" />
import RegistrationPage from "../pages/RegistrationPage";
import { defineConfig } from 'cypress';

describe('registration', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
  });
  it('Load the Homepage, validate logo and buttons Prihlaseni and Registrace', () => {
    cy.wait(500)
    cy.get('img[data-testid="image-pv-logo"]').should('be.visible') 
    cy.get('button[data-testid="home-login-button"]').should('be.visible')
    cy.get('button[data-testid="home-registration-button"]').should('be.visible')
  })

  it('Click on button "Registrace", input invalid IČO, validate notification', () => {
    RegistrationPage.visit()
    cy.contains('label', 'IČO').should('be.visible').click({ force: true })
    RegistrationPage.clickOutsideOfTheForm()
    cy.contains('Pole IČO je povinné').should('be.visible')
    cy.get('input[data-testid="registration-ico-input"]').type('12345678')
    RegistrationPage.clickOutsideOfTheForm()
    cy.wait(1000)
    cy.contains('button','Zkontrolovat').click({ force: true })
    cy.contains('IČO nenalezeno').should('be.visible')
  })
  
  it.only('Click on button "Registrace", input valid IČO, complete the registration process', () => {
    RegistrationPage.visit()
    RegistrationPage.enterValidIco()
    cy.wait(1000)
    cy.contains('button','Zkontrolovat').click({ force: true })
    RegistrationPage.enterEmail()
    RegistrationPage.enterFirstName()
    RegistrationPage.enterLastName()
    RegistrationPage.clickOutsideOfTheForm()
    cy.wait(500)
    RegistrationPage.submit()
    RegistrationPage.checkUrlAndMessageAfterSuccessReg()
    RegistrationPage.backToHomeAndVerifyUrl()
  })
})

