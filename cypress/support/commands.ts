declare namespace Cypress {
  interface Chainable {
    themechange(): Chainable<void>;
    successlogin(): Chainable<void>;
  }
}

Cypress.Commands.add('successlogin', () => {
  cy.origin('https://auth.staging.pv.sumanet.cz/', () => {
    cy.get('#username').type('anastasia.balyaeva@sumanet.cz')
    cy.get('#password').type('Password123*')
    cy.get('button[type="submit"]').click()
  })
})

Cypress.Commands.add('themechange', () => {
  cy.get('button[data-testid="theme-drawer"]').click({ force: true })
  cy.get('button[data-testid="theme-change-toggle"]').click({ force: true })
  cy.get('button[data-testid="mud-drawer-close-button"]').click()
})
