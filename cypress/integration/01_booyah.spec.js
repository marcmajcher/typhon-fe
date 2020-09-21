describe('Smoke tests', () => {
  it('Are we live?', () => {
    expect(true).to.equal(true);
  });
  it('Should booyah', () => {
    cy.visit('http://localhost:3000/booyah');
    cy.contains('booyah');
  });
});
