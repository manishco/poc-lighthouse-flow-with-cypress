describe('example to-do app', () => {
  it('can add new todo items', () => {
    cy.lighthouseStartFlow({ name: 'Test start' });

    cy.visit('https://inp-demo.glitch.me/');

    cy.lighthouseStartTimespan({ stepName: 'test 2' });

    cy.get('#periodic-blocking-amount')
      .invoke('val', 500)
      .trigger('change');

    cy.get('#keydown-blocking-time')
      .invoke('val', 200)
      .trigger('change');

    cy.get('#periodic-blocking-amount').type('test 123');

    cy.lighthouseEndTimespan();

    cy.lighthouseGenerateReport();
  });
});
