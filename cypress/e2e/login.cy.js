describe('로그인 화면', () => {

    beforeEach(() => {
      cy.visit('https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/');
    });
  
    it('로그인 화면 접근!', () => {
  
      cy.get('[href="/login"]').click();
  
      cy.get('.design-cache-prefix-t846p7').contains('로그인');
     
    });
  
    it('아이디 찾기 화면 접근', () => {
  
      cy.get('[href="/login"]').click();
  
      cy.get('[href="/login/emailrecovery"]').click();
  
      cy.get('.design-cache-prefix-33fpmi').contains('아이디 찾기');
      
    });
  
    it('비밀번호 찾기 화면 접근', () => {
       
      cy.get('[href="/login"]').click();
  
      cy.get('[href="/login/passwordrecovery"]').click();
  
      cy.get('.design-cache-prefix-33fpmi').contains('비밀번호 찾기');
        
    });
  
    it('회원가입 화면 접근', () => {
  
      cy.get('[href="/login"]').click();
  
      cy.get('.design-cache-prefix-19bc87t').click();
  
      cy.get('.design-cache-prefix-2q4gog').contains('약관 동의');
     
    });
  
  })