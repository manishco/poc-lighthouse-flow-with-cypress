const { defineConfig } = require('cypress');
const setupLighthouseNodeEvents = require('./lighthouse/setupLighthouseNodeEvents');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      setupLighthouseNodeEvents(on, config);
    },
  },
});
