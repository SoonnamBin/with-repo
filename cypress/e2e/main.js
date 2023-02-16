describe('홈 화면', () => {
  it('홈 화면 접속 및 안내 문구 체크', () => {

    cy.visit('https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/')

    //상단 안내 문구
    cy.get('.design-cache-prefix-1all1tc').contains('알스퀘어 위드의 시작');
    cy.get('.design-cache-prefix-1o8vykk').contains('지식산업센터도');
    cy.get('.design-cache-prefix-1trr0af').contains('알스퀘어');
    cy.get('.design-cache-prefix-bt3anp').contains('알스퀘어 위드를 통해고객님의 부동산 파트너로 한 걸음 더 다가갑니다.');

    // 중간 안내 문구
    cy.get('.design-cache-prefix-1syx2df').contains('13년간 쌓아온');

  });
})