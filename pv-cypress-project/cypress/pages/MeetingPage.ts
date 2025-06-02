/// <reference types="cypress" />
/// <reference types="mocha" />


export default new class MeetingPage {

getToCreatingMeeting () {
    cy.get('button[id="grid-row-detail"]').click()
    cy.get('div[id="org-unit-meeting-list"] a').click({ force: true })
    cy.get('button[id="grid-create"]').click()
  }

enterSubject (subject: string) {
  cy.get('input[id="meeting-subject"]').type(subject)
}

// enterDescription (description: string) {
//   cy.contains('div[id="meeting-description"]', 'div[class="ql-editor"]').type(description)
  
// }

enterPlace (place: string) {
  cy.get('input[id="meeting-location"]').type(place)
}

enterNote (note: string) {
  cy.get('input[id="meeting-location-note"]').type(note)
}

// enterHeader (header: string) {
//   cy.get('div[id="meeting-header"] div[class="ql-editor"]').type(header)
// }

// enterFooter (footer: string) {
//   cy.get('div[id="meeting-footer"] div[class="ql-editor"]').type(footer)
// }

uploaDocument(avatar: string) {
    cy.get('input[class="absolute mud-width-full mud-height-full overflow-hidden z-20"]').selectFile('cypress/fixtures/Test-document-PV.docx', {force: true});
  }

clickSubmitButton () {
  cy.get('button[id="modal-create"]').click()
}

clickConfirmationButton () {
  cy.get('button[data-testid="paid-action-confirm"]').click({ force: true })
}
}




