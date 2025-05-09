// === /cypress/e2e/audienceTests.cy.js ===
import AudiencePage from '../pages/AudiencePage';

const audiencePage = new AudiencePage();

describe('Fluency API - Audience Section (Mock Tests)', () => {
  // ✅ Positive: List allowed audience types
  it('should return 200 and valid audience types', () => {
    audiencePage.getAudienceTypes().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('types');
    });
  });

  // ✅ Positive: Create audience with valid payload
  it('should create an audience successfully with valid data', () => {
    audiencePage.createAudience(123456, { name: 'CRM Test Audience', partners: [1, 2], status: 'ENABLED' })
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
  });

  // ❌ Negative: Fail to create audience with missing required field
  it('should fail to create audience when name is missing', () => {
    audiencePage.createAudience(123456, { partners: [1], status: 'ENABLED' })
      .then((response) => {
        expect(response.status).to.eq(400);
      });
  });

  // ✅ Positive: Get audience stats
  it('should fetch stats for a given audienceId', () => {
    audiencePage.getAudienceStats(123).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.keys(['accountAudienceId', 'membersUpdated', 'partnerId', 'updateTime']);
    });
  });

  // ❌ Negative: Get audience stats with invalid ID
  it('should return 404 for invalid audienceId', () => {
    audiencePage.getAudienceStats(0).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  // ✅ Positive: Update an audience
  it('should update an audience successfully', () => {
    audiencePage.updateAudience(123456, 123, { status: 'DISABLED' }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // ❌ Negative: Update audience with bad payload
  it('should fail to update an audience with bad status', () => {
    audiencePage.updateAudience(123456, 123, { status: 123 }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  // ❌ Negative: Get account audiences with invalid customer ID
  it('should return 404 for unknown customerAccountId', () => {
    audiencePage.listAccountAudiences(999999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
