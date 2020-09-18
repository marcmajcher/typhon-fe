describe('Smoke tests', () => {
  it('Are we live?', () => {
    expect(true).to.equal(true);
  })
  it('Booyah', () => {
    cy.visit('http://localhost:3000/booyah');
    cy.contains('booyah');
  })
})
