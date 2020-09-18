
const testToken = Cypress.env('TEST_TOKEN');
const url = 'http://localhost:3030/';

describe('New User Flow', () => {
  it('Should show the new user flow when first logged in', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.contains("Looks like you're new here");
  });

  it('Should let you choose a species and go to the next step', () => {
    cy.contains('Choose a Species');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra');
    cy.contains('Next Step').click();
    cy.contains('Select an Occupation');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter');
    cy.contains('Next Step').click();
    cy.contains('Choose a Gender');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter :: male');
    cy.contains('Next Step').click();
    cy.contains('What is your Lineage');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1');
    cy.contains('Next Step').click();
    cy.contains('Choose your Appearance');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1 :: Looky');
    cy.contains('Next Step').click();
    cy.contains('Pick a personal Keepsake');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1 :: Looky :: Rock');
  });
  
  it('Should let you step backwards through the steps', () => {
     cy.contains('Previous Step').click();
     cy.contains('Choose your Appearance');
     cy.contains('Previous Step').click();
     cy.contains('What is your Lineage');
     cy.contains('Previous Step').click();
     cy.contains('Choose a Gender');
     cy.contains('Previous Step').click();
     cy.contains('Select an Occupation');
     cy.contains('Previous Step').click();
     cy.contains('Choose a Species');

  })
});
