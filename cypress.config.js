const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportHeight: 1500,
    viewportWidth: 1500,  
    chromeWebSecurity: false,
    env: {
        "PASSWORD": "secret_sauce"
    },
    //watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
