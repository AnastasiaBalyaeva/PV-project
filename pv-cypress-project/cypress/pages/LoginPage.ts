/// <reference types="cypress" />
/// <reference types="mocha" />

export default new class LoginPage {
  // visit() {
  //   cy.get('button[data-testid="home-login-button"]').should('be.visible').click({ force: true })
  // }

  // enterEmail() {
  //   cy.contains('username', 'Email').type(loginData.email)
  // }

  // enterPassword() {
  //   this.setupFixture()
  //   cy.get('#password').type(loginData.password)
  // }

  // clickLoginButton() {
  //   cy.get('button[type="sumbit"]').click()
  // }

  successLogin() {
    cy.origin('https://auth.staging.pv.sumanet.cz/', () => {
        cy.get('#username').type('anastasia.balyaeva@sumanet.cz')
        cy.get('#password').type('Password123*')
        cy.get('button[type="submit"]').click()
      })

        cy.wait(2000)
        cy.get('nav[data-testid="nav-menu"]').should('be.visible')
  }

  

  // setupFixture() {
  //   cy.fixture('login').as('loginData');
  // }
}
