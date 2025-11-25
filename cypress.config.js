const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'fgw59x',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
