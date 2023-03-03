const { defineConfig } = require('cypress')

// require('dotenv').config()

module.exports = defineConfig({
  projectId: "fa3noq",
  e2e: {
    "baseUrl": "https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
