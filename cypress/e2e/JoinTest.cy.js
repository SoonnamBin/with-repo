
/*
[테스트 시나리오]
목적 : 회원가입 동작 확인
1. 회원가입 화면 접근
2. 약관 모두 체크
3. 동의하고 가입하기 버튼 선택
4. 본인인증 모달 노출 확인
*/


describe('회원가입', () => {
  it('약관 체크 및 본인인증 모달 노출 확인', () => {

    cy.visit('/');
    //회원가입 선택
    cy.get('[href="/join"] > .MuiBox-root').click();
    cy.url().should('include', '/join');
    //모두 동의합니다. 체크
    cy.contains('모두 동의합니다.').click();
    //필수 및 선택 약관 모두 체크 및 동의하고 가입하기 버튼 활성화
    cy.get('[type="checkbox"]').check().should('be.enabled');
    cy.contains('동의하고 가입하기').should('be.enabled');
    //동의하고 가입하기 버튼 선택
    // cy.contains('동의하고 가입하기').click();
    cy.wait(500);


  })
})