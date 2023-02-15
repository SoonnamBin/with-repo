describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/')

    cy.get('.design-cache-prefix-1all1tc').contains('알스퀘어 위드의 시작');
    
  })
})