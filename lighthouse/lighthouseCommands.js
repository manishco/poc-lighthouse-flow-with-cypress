[
  'lighthouseStartFlow',
  'lighthouseStartTimespan',
  'lighthouseEndTimespan',
  'lighthouseGenerateReport',
].forEach(
  (command) => Cypress.Commands.add(command, (options) => cy.task(command, options)),
);
