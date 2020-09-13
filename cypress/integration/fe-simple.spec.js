describe('Smoke tests', () => {
  it('Should have a title', () => {
    cy.visit('http://localhost:3030/');
    cy.contains('Typhon Station');
  })
})
