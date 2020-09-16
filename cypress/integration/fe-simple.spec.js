
const testToken = Cypress.env('TEST_TOKEN');
const url = 'http://localhost:3030/';

describe('Basic tests', () => {
  it('Should have a title', () => {
    cy.visit(url);
    cy.contains('Typhon Station');
  });
  it('Should show a splash page when not logged in', () => {
    cy.contains('splash page');
  });
  it('Should not show the main page when not logged in', () => {
    cy.get('main').should('not.contain', 'Welcome to Typhon Station,');
  });
});

describe('Logged in', () => {
  xit('Should log in and get authenticated', () => {
    // but here we are.
  });
  it('Should show the main page upon authentication', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.contains('Welcome to Typhon Station,');
  });
});
