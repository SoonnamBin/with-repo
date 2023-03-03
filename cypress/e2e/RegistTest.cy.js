




describe('매물등록', () => {
  it('임대 매물 등록하기', () => {

    cy.visit('/');

    //로그인 버튼 선택
    cy.get('[href="/login"]').click();
    //로그인 화면 확인
    cy.url().should('include', '/login');
    //이메일 입력
    cy.get('input[name="email"]').type('zizibebe10@naver.com');
    //비밀번호 입력
    cy.get('input[name="password"]').type('sa03103166');
    //로그인 버튼 선택
    cy.get('button[type=submit]').click();
    //로그인 확인
    cy.url().should('include', '/manage');
    //매물등록 선택
    cy.get('[href="/regist"]').click();
    //매물등록 화면 확인
    cy.url().should('include', '/regist/property');
    //건물 찾기 > 건물명 입력
    cy.get('input[placeholder="등록할 건물의 주소, 건물명으로 찾아보세요."]').type('마리오타워');
    //검색된 건물명 선택
    cy.contains('마리오타워').click();
    //선택한 건물과 입력한 건물명 비교
    cy.get('input[placeholder="등록할 건물의 주소, 건물명으로 찾아보세요."]').should('have.value', '마리오타워');
    //층 선택
    cy.get('button[placeholder="층 선택"]').click();


  })
})