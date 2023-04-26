
/*
[테스트 시나리오]
목적 : 비로그인 상태의 into 화면의 안내 문구 및 버튼/QR코드 노출 확인
1. intro 화면 접근
2. 상단 안내 문구 확인
3. 중간 안내 문구 확인
4. 하단 안내 문구 확인
5. 내 매물 등록하고 공실 해결하기 버튼 노출
6. 회원가입하기 버튼 노출
7. 내 매물 등록하기 버튼 노출
8. 앱 다운로드 버튼 노출 
9. QR코드 노출
10. 고객센터 정보 확인
*/

describe('intro', () => {
  it('intro', () => {

    cy.visit('/');

    //GNB > 서비스 소개 선택
    cy.contains('서비스 소개').click();
    //스크롤 위로 가기
    cy.get('button[aria-label="스크롤 위로 가기"]').click();
    //GNB > 이용안내 선택
    cy.contains('이용안내').click();
    //스크롤 위로 가기
    cy.get('button[aria-label="스크롤 위로 가기"]').click();
    //내 매물 등록하고 공실 해결하기 선택
    cy.get('.design-cache-prefix-d1z2nu').click();
    cy.url().should('include', '/login');
    //intro 재접근
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('include', '/');
    //회원가입하기 버튼 선택
    cy.get('.design-cache-prefix-16pyde7 > .design-cache-prefix-18jlma7').click();
    cy.url().should('include', '/join')
    //intro 재접근
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('include', '/');
    //내 매물 등록하기 버튼 선택
    cy.get('.design-cache-prefix-j7qwjs > .design-cache-prefix-18jlma7').click();
    cy.url().should('include', '/login');
    //intro 재접근
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('include', '/');
    //내 매물 등록하기 버튼 선택
    cy.get('.design-cache-prefix-e0tjrc > .design-cache-prefix-18jlma7').click();
    cy.url().should('include', '/login');
    //intro 재접근
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('include', '/');
    //스토어 링크 이동 확인
    // cy.get('[aria-label="애플스토어에서 앱 다운로드"] > img').click();
    // cy.get('[aria-label="구글플레이스토어에서 앱 다운로드"] > img').click();


  });
})