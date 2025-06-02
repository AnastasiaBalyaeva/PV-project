import meeting from '../fixtures/meeting.json'

import MeetingPage from "cypress/pages/MeetingPage";
import LoginPage from "cypress/pages/LoginPage";

describe('login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('meeting').as('meetingData');
  });

  it('Create meeting', () => {
    cy.get('button[data-testid="home-login-button"]').should('be.visible').click({ force: true })
    LoginPage.successLogin()
    MeetingPage.getToCreatingMeeting()
    MeetingPage.enterSubject(meeting.subject)
    // MeetingPage.enterDescription(meeting.description)
    MeetingPage.enterPlace(meeting.place)
    MeetingPage.enterNote(meeting.note)
    // MeetingPage.enterHeader(meeting.header)
    // MeetingPage.enterFooter(meeting.footer)
    MeetingPage.uploaDocument(meeting.document)
    MeetingPage.clickSubmitButton()
    MeetingPage.clickConfirmationButton()
  })
 
})

