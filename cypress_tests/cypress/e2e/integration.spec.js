/// <reference types="cypress" />

describe('API Gateway and Lambda Test', () => {
  it('Successfully calls the API Gateway endpoint', () => {
    cy.request({
      method: 'GET',
      url: 'https://seunalabi.com/', 
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

  
