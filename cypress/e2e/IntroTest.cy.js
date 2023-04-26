
/*
[테스트 시나리오]
목적 : intro 화면 내 위치 이동 및 비로그인 상태의 화면 이동 시 로그인 화면 노출 확인
1. intro 화면 접근
2. into 화면 내 위치 이동 동작 확인
3. 내 매물 등록하고 공실 해결하기 버튼 선택
4. 로그인 화면 노출 확인
5. 회원가입하기 버튼 선택
6. 로그인 화면 노출 확인
7. 내 매물 등록하기 버튼 선택
9. 로그인 화면 노출 확인
*/

describe('intro', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('intro 화면 내 동작 확인', () => {

    //GNB > 서비스 소개 선택
    cy.contains('서비스 소개').click();

    //스크롤 위로 가기 선택
    cy.get('button[aria-label="스크롤 위로 가기"]').click();

    //GNB > 이용안내 선택
    cy.contains('이용안내').click();

    //스크롤 위로 가기 선택
    cy.get('button[aria-label="스크롤 위로 가기"]').click();

    //로고 이미지 선택
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('eq', 'https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/');

    });

  it('비로그인 > 내 매물 등록하고 공실 해결하기 선택 동작 확인', () => {

    //내 매물 등록하고 공실 해결하기 선택
    cy.get('.design-cache-prefix-d1z2nu').click();

    //로그인 화면 노출 확인
    cy.url().should('include', '/login');

    });
    
  it('비로그인 > 회원가입 선택 동작 확인', () => {

    //회원가입하기 버튼 선택
    cy.get('.design-cache-prefix-16pyde7 > .design-cache-prefix-18jlma7').click();

    //회원가입 화면 노출 확인
    cy.url().should('include', '/join');

  })

   it('비로그인 > 내 매물 등록하기 선택 동작 확인', () => {
        
    //내 매물 등록하기 버튼 선택
    cy.get('.design-cache-prefix-j7qwjs > .design-cache-prefix-18jlma7').click();
    
    //로그인 화면 노출 확인
    cy.url().should('include', '/login');

    //intro 재접근
    cy.get('[src="/images/logo.png"]').click();
    cy.url().should('include', '/');

    //내 매물 등록하기 버튼 선택
    cy.get('.design-cache-prefix-e0tjrc > .design-cache-prefix-18jlma7').click();

    //로그인 화면 노출 확인
    cy.url().should('include', '/login');
    
   }); 

});
