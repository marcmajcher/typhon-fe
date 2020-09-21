const testToken = Cypress.env('TEST_TOKEN');
const url = 'http://localhost:3030/';

describe('Basic tests', () => {
  it('Should have a title', () => {
    cy.visit(url);
    cy.get('nav').should('contain', 'TYPHON STATION');
  });
  it('Should show a splash page when not logged in', () => {
    cy.contains('Welcome to Typhon Station');
  });
  it('Should not show the main page when not logged in', () => {
    cy.get('main').should('not.contain', 'Welcome to Typhon Station,');
  });
});

describe('Logged in', () => {
  xit('Should log in and get authenticated', () => {
    // but here we are.
  });
  it('Should show a user image upon authentication', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.get('img.user-image').should('exist');
  });
});
