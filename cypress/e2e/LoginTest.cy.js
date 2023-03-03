
/*
[테스트 시나리오]
목적 : 로그인/로그아웃이 정상적으로 가능한지 확인
1. 로그인 버튼 선택
2. 이메일 입력
3. 비밀번호 입력
4. 이메일 저장 체크
5. 로그인 버튼 선택
6. 로그인 확인
7. 로그아웃 선택
8. 로그아웃 팝업 > 로그아웃 선택
*/


describe('사용자 로그인', () => {

    it('로그인/로그아웃', () => {

      cy.visit('/');
      
      //로그인 버튼 선택
      cy.get('[href="/login"]').click();
      //로그인 화면 접근 확인
      cy.url().should('include', '/login');
      //이메일 입력
      cy.get('input[name="email"]').type('zizibebe10@naver.com');
      //비밀번호 입력
      cy.get('input[name="password"]').type('sa03103166');
      //이메일 저장 체크
      cy.get('input[name="save"]').click();
      //로그인 버튼 선택
      cy.get('button[type=submit]').click();
      //로그인 확인
      cy.url().should('include', '/manage');
      //프로필 선택
      cy.get('button[aria-label="프로필 메뉴"]').click();
      //로그아웃 선택
      cy.get('button[aria-label="로그아웃"]').click();
      //로그아웃 팝업 > 로그아웃 선택
      cy.get('.design-cache-prefix-sh2iiq').click();
      //로그아웃 확인
      cy.url().should('include', '/login');
      cy.get('input[name="email"]').should('have.value', 'zizibebe10@naver.com');
      cy.get('input[name="save"]').should('be.enabled');

    });

  })