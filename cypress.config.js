const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",  // This tells Cypress where to find the test files
    setupNodeEvents(on, config) {
      // You can add event listeners here if needed
    },
  },
});
