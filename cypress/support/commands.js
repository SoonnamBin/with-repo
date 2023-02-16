// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      body: {
        grant_type: 'refresh_token',
        client_id: Cypress.env('357065275436-p3s4fjcjum9cosn4on27fa7jhim1tmsf.apps.googleusercontent.com'),
        client_secret: Cypress.env('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'),
        refresh_token: Cypress.env('1//04G551Hy2brBxCgYIARAAGAQSNwF-L9Ir2CBjDq087Oljah0RuCnNGF0f7oDasLNuODV5ztkP-a5nQMVe48puzOgyLc8Y2WokNQ0'),
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body
  
      cy.request({
        method: 'GET',
        url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body)
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        }
  
        window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
        cy.visit('/')
      })
    })
  })