const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    excludeSpecPattern : ['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples'],
    specPattern : '**/cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },
};
