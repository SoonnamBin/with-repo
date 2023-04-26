const { defineConfig } = require('cypress')

module.exports = defineConfig({
  specPattern: 'cypress/e2e/**/*',
  projectId: "fa3noq",
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": true,
    "json": true,
    "timestamp": "yyyy-mm-dd HH:MM:ss",
    "reportFilename": "index",
    "charts": true,
    "code": true,
    "autoOpen": false,
    "timestampFormat": "{{DATE}} {{TIME}}"
  },
  e2e: {
    baseUrl: "https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
