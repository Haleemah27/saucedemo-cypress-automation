const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
       allureWriter(on, config)
      return config
    },
    
  },
});
