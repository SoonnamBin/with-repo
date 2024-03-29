
/*
[테스트 시나리오]
목적 : 임대/매매 매물 등록하기 동작 확인
1. 로그인 
2. 매물등록 선택
3. 건물 찾기 선택 및 건물 입력
4. 검색된 건물 선택
5. 층/호 정보 입력
6. 필수 항목 입력 후 다음 버튼 선택
7. 필수 건물 정보 입력 (매매가/임대료/보증금/관리비)
8. 정보 제공 활용 동의 체크
9. 제출하기 버튼 선택
10. 등록정보 확인 > 등록 완료하기 선택
11. 매물 등록 완료
*/



describe('매물등록', () => {

  beforeEach(() => {

     cy.visit('/');

     //로그인
     cy.get('[href="/login"]').click();
     cy.url().should('include', '/login');
 
     cy.get('input[name="email"]').type('zizibebe10@naver.com');
     cy.get('input[name="password"]').type('sa03103166');
     cy.get('button[type=submit]').click();

     cy.url().should('include', '/manage');
   
     //매물등록 버튼 선택
     cy.get('[href="/regist"]').click();

     //건물 정보 등록 화면 노출 확인
     cy.url().should('include', '/regist/property');

     //건물 찾기 > 건물명 입력
     cy.get('input[placeholder="등록할 건물의 주소, 건물명으로 찾아보세요."]').type('마리오타워');

     //검색된 건물명 선택
     cy.contains('마리오타워').click();

     //선택한 건물과 입력한 건물명 비교
     cy.get('input[placeholder="등록할 건물의 주소, 건물명으로 찾아보세요."]').should('have.value', '마리오타워');

     //층 선택
     cy.get('button[placeholder="층 선택"]').click();
     cy.get('div').contains('2층').click();

     //호수 선택
     cy.get('button[placeholder="호수 선택"]').click();
     cy.get('div').contains('211호').click();

  });

  it('임대 유형 매물 등록하기', () => {
 
    //매물 유형 > 임대 선택 상태 확인
    cy.get('input[name="productType"]').should('have.value', 'RENT');

    //분할 여부 > 분할매물이 아닙니다 선택 상태 확인
    cy.get('input[name="canPartitioning"]').should('have.value', 'false');

    //다음 버튼 활성화 확인
    cy.get('[type="submit"]').should('be.enabled');

    //다음 버튼 선택 > 매물 정보 등록 화면 노출 확인
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/regist/rent');
    cy.contains('제출하기').should('be.disabled');

    //임대료 입력
    cy.get('input[name="expenseInformation.rent"]').type('1500000');

    //보증금 입력
    cy.get('input[name="expenseInformation.securityDeposit"]').type('1500000');

    //공실 여부 > 공실입니다 선택 상태 확인
    cy.get('input[name="vacancy"]').should('have.value', 'true');

    //정보 제공 활용 동의 체크
    cy.get('input[name="agreement"]').click();

    //필수 입력 항목 모두 입력 시 제출하기 버튼 활성화 확인
    cy.contains('제출하기').should('be.enabled');
    cy.contains('제출하기').click();

    //등록정보 확인 > 등록 완료하기 선택
    cy.contains('등록 완료하기').click();

    //임대 매물 등록 완료 확인
    cy.url().should('include', '/regist/confirm');

  })


  it('매매 유형 매물 등록하기', () => {

    //매물 유형 > 매매 선택
    cy.get('input[value="SALE"]').click();

    //분할 여부 > 분할매물이 아닙니다 선택 상태 확인
    cy.get('input[name="canPartitioning"]').should('have.value', 'false');

    //다음 버튼 활성화 확인
    cy.get('[type="submit"]').should('be.enabled');

    //다음 버튼 선택 > 매물 정보 등록 화면 노출 확인
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/regist/rent');
    cy.contains('제출하기').should('be.disabled');

    //매매가 입력
    cy.get('input[name="expenseInformation.sale"]').type('1500000');

    //공실 여부 > 공실입니다 선택 상태 확인
    cy.get('input[name="vacancy"]').should('have.value', 'true');

    //인테리어 여부 > 하지 않았습니다 선택 상태 확인
    cy.get('input[name="interiorDetail.interior"]').should('have.value', 'NO_INTERIOR');

    //정보 제공 활용 동의 체크
    cy.get('input[name="agreement"]').click();

    //필수 입력 항목 모두 입력 시 제출하기 버튼 활성화 확인
    cy.contains('제출하기').should('be.enabled');
    cy.contains('제출하기').click();

    //등록정보 확인 > 등록 완료하기 선택
    cy.contains('등록 완료하기').click();

    //매매 매물 등록 완료 확인
    cy.url().should('include', '/regist/confirm');

  })
})
