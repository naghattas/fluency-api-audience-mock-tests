const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://backpack-staging.fluencyinc.co",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
