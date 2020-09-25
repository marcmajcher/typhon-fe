const testToken = Cypress.env('TEST_TOKEN');
const url = 'http://localhost:3030';

const str = {
  pilotName: 'Testy Pilota',
  shipType: 'Blister',
};

describe('Main application page', () => {
  it('Should show the main page after user created', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.contains(`Welcome to Typhon Station, ${str.pilotName}!`);
    cy.contains(/station/i);
    cy.contains(/hangar/i);
    cy.contains(/pilot/i);
    cy.contains(/ship/i);
    cy.contains(/cargo/i);
    cy.contains(/jobs/i);
    cy.contains(/concourse/i);
    cy.contains(/weapons/i);
    cy.contains(/defense/i);
    cy.contains(/accessories/i);
    cy.contains(/skillware/i);
    cy.contains(/shipyard/i);
    cy.contains(/shärrzhäsh/i);
    cy.contains(/cantina/i);
    cy.contains(/jobs/i);
    cy.contains(/news/i);
    cy.contains(/rankings/i);
  });

  it('Should be able to navigate to the hangar', () => {
    cy.contains(/- hangar -/i).click();
    cy.contains(/> hangar >/i);
    cy.contains(/the scrapyard/i);
    cy.contains(/varchi/i);
  });

});
