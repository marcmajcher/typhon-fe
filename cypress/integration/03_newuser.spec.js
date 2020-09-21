const testToken = Cypress.env('TEST_TOKEN');
const url = 'http://localhost:3030';

const str = {
  newPilot: `Looks like you're new here`,
  newShip: 'Looks like you need a new ship',
  species: 'Nahmra',
  occupation: 'Public Relations',
  gender: 'Male',
  lineage: 'Tulp Community',
  appearance: 'Good',
  keepsake: 'Rock',
  keepsake2: 'Doll',
  chooseSpecies: 'Choose a Species',
  chooseOccupation: 'Select an Occupation',
  chooseGender: 'Choose a Gender',
  chooseLineage: 'What is your Lineage',
  chooseAppearance: 'Choose your Appearance',
  chooseKeepsake: 'Pick a personal Keepsake',
  nextStep: 'Next Step',
  previousStep: 'Previous Step',
  nameInput: `What's your name, pilot`,
  summarySpecies: `SPECIES: Nahmra`,
  summaryKeepsake: `KEEPSAKE: Rock`,
  summaryKeepsake2: `KEEPSAKE: Doll`,
  goBack: 'Go Back',
  pilotConfirm: 'Looks Great',
  pilotName: 'Testy Pilota',
  shipType: 'Blister',
  getShip: 'GET IT',
};

function getStep(step, alt = '') {
  const steps = ['species', 'occupation', 'gender', 'lineage', 'appearance', 'keepsake'];
  const separator = '::';

  return separator + steps.slice(0, step).map(e => `${str[`${e}${alt}`] || str[e]}`).join(separator);
}

describe('New User Flow', () => {
  it('Should show the new user flow when first logged in', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.get('#clearme').should('contain', '.'); //tk
    cy.get('#clearme').click();
    cy.visit(url);
    cy.contains(str.newPilot);
  });

  it('Should let you choose a thing and go through all the steps', () => {
    cy.contains(str.chooseSpecies);
    cy.get('label').first().click();
    cy.contains(getStep(1));
    cy.contains(str.nextStep).click();
    cy.contains(str.chooseOccupation);
    cy.get('label').first().click();
    cy.contains(getStep(2));
    cy.contains(str.nextStep).click();
    cy.contains(str.chooseGender);
    cy.get('label').first().click();
    cy.contains(getStep(3));
    cy.contains(str.nextStep).click();
    cy.contains(str.chooseLineage);
    cy.get('label').first().click();
    cy.contains(getStep(4));
    cy.contains(str.nextStep).click();
    cy.contains(str.chooseAppearance);
    cy.get('label').first().click();
    cy.contains(getStep(5));
    cy.contains(str.nextStep).click();
    cy.contains(str.chooseKeepsake);
    cy.get('label').first().click();
    cy.contains(getStep(6));
  });

  it('Should let you step backwards through the steps', () => {
    cy.contains(str.previousStep).click();
    cy.contains(str.chooseAppearance);
    // cy.get('input[value="69"]').should('be.checked');
    cy.contains(str.previousStep).click();
    cy.contains(str.chooseLineage);
    // cy.get('input[value="1"]').should('be.checked');
    cy.contains(str.previousStep).click();
    cy.contains(str.chooseGender);
    // cy.get('input[value="1"]').should('be.checked');
    cy.contains(str.previousStep).click();
    cy.contains(str.chooseOccupation);
    // cy.get('input[value="1"]').should('be.checked');
    cy.contains(str.previousStep).click();
    cy.contains(str.chooseSpecies);
    // cy.get('input[value="1"]').should('be.checked');
  });

  it('Should show a summary of the pilot', () => {
    cy.contains(str.chooseSpecies);
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.get('label').first().click();
    cy.contains(str.nextStep).click();
    cy.contains(str.nameInput);
    cy.contains(str.summarySpecies);
    cy.contains(str.summaryKeepsake);
  });

  it('Should be able to back up and change something', () => {
    cy.contains(str.goBack).click();
    // cy.get('input[value="666"]').should('be.checked');
    cy.contains(str.keepsake2).click();
    cy.contains(getStep(6, 2));
    cy.contains(str.nextStep).click();
    cy.contains(str.summarySpecies);
    cy.contains(str.summaryKeepsake2);
  });

  it('Should require a name to proceed', () => {
    cy.contains(str.pilotConfirm).should('not.be.visible');
    cy.get('input[name="pilot-name').type(str.pilotName);
    cy.contains(str.pilotConfirm).click();
    cy.contains(str.newShip);
  });

  it('Should give you the ship select screen after you leave and come back', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('_t', testToken);
      }
    });
    cy.contains(str.newShip);
  });

  it('Should let you get a new ship', () => {
    cy.contains(str.shipType).click();
    cy.contains(str.getShip).click();
    cy.contains(str.pilotName);
  });
});
