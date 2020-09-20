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
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1 :: Good');
    cy.contains('Next Step').click();
    cy.contains('Pick a personal Keepsake');
    cy.get('[type="radio"]').first().check();
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1 :: Good :: Rock');
  });

  it('Should let you step backwards through the steps', () => {
    cy.contains('Previous Step').click();
    cy.contains('Choose your Appearance');
    cy.get('input[value="69"]').should('be.checked');
    cy.contains('Previous Step').click();
    cy.contains('What is your Lineage');
    cy.get('input[value="1"]').should('be.checked');
    cy.contains('Previous Step').click();
    cy.contains('Choose a Gender');
    cy.get('input[value="1"]').should('be.checked');
    cy.contains('Previous Step').click();
    cy.contains('Select an Occupation');
    cy.get('input[value="1"]').should('be.checked');
    cy.contains('Previous Step').click();
    cy.contains('Choose a Species');
    cy.get('input[value="1"]').should('be.checked');
  });

  it('Should show a summary of the pilot', () => {
    cy.contains('Choose a Species');
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.get('[type="radio"]').first().check();
    cy.contains('Next Step').click();
    cy.contains('How does this look?');
    cy.contains('SPECIES: Nahmra');
    cy.contains('KEEPSAKE: Rock');
  });

  it('Should be able to back up and change something', () => {
    cy.contains('Go Back').click();
    cy.get('input[value="666"]').should('be.checked');
    cy.contains('Doll').get('input').check();
    cy.contains(':: Nahmra :: VR Promoter :: male :: Troop1 :: Good :: Doll');
    cy.contains('Next Step').click();
    cy.contains('SPECIES: Nahmra');
    cy.contains('KEEPSAKE: Doll');
    cy.contains('Looks Great').click()
  });
});
