const { defineConfig } = require('cypress')

// require('dotenv').config()

module.exports = defineConfig({
  projectId: "fa3noq",
  env: {
    googleRefreshToken: '1//04G551Hy2brBxCgYIARAAGAQSNwF-L9Ir2CBjDq087Oljah0RuCnNGF0f7oDasLNuODV5ztkP-a5nQMVe48puzOgyLc8Y2WokNQ0',
    googleClientId: '357065275436-p3s4fjcjum9cosn4on27fa7jhim1tmsf.apps.googleusercontent.com',
    googleClientSecret: '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',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
