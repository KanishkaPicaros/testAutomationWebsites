const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "orange_hrm/specs/*",
    supportFile: "orange_hrm/support/e2e.js",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
