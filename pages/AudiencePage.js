// === /cypress/pages/AudiencePage.js ===
class AudiencePage {
    getAudienceTypes() {
      return cy.request({
        method: 'GET',
        url: '/api/v2/audience/type',
        failOnStatusCode: false,
      });
    }
  
    createAudience(customerId, body) {
      return cy.request({
        method: 'POST',
        url: `/api/v2/audience/${customerId}`,
        body,
        failOnStatusCode: false,
      });
    }
  
    getAudienceStats(audienceId) {
      return cy.request({
        method: 'GET',
        url: `/api/v2/audience/${audienceId}/stats`,
        failOnStatusCode: false,
      });
    }
  
    updateAudience(customerId, audienceId, body) {
      return cy.request({
        method: 'PUT',
        url: `/api/v2/audience/${customerId}/${audienceId}`,
        body,
        failOnStatusCode: false,
      });
    }
  
    listAccountAudiences(customerId) {
      return cy.request({
        method: 'GET',
        url: `/api/v2/audience/${customerId}`,
        failOnStatusCode: false,
      });
    }
  }
  
  export default AudiencePage;
  