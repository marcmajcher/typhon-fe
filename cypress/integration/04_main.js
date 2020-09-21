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
    cy.contains(str.pilotName);
  });
});
