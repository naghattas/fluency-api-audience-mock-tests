# 🧪 Fluency API – Mock Test Suite for Audience Endpoints

This project contains a mock Cypress test suite targeting the **Audience** section of Fluency’s customer-facing API. Tests are structured using the **Page Object Model (POM)** pattern and designed to demonstrate QA automation strategy through both passing and failing API scenarios.

> ⚠️ **Note**: These tests are built on sample responses from Fluency’s public API documentation. No authentication or real endpoints are used — this is a mock framework created for assessment purposes.

---

## 📁 Project Structure
```bash
fluency-api-audience-mock-tests/
├── cypress/
│ ├── e2e/
│ │ └── audienceTests.cy.js # 8 mock test cases
│ └── pages/
│ └── AudiencePage.js # API endpoint abstraction (POM)
├── cypress.config.js # Cypress configuration
├── README.md # This file
```

---

## ✅ What’s Covered

### Positive Test Scenarios
- ✅ Get allowed audience types
- ✅ Create audience with valid payload
- ✅ Fetch audience stats
- ✅ Update audience with valid status

### Negative (Failing) Scenarios
- ❌ Missing required field in `POST` request
- ❌ Invalid `audienceId` in `GET /stats`
- ❌ Invalid payload in `PUT` update
- ❌ Invalid `customerAccountId` on list request

All requests use `failOnStatusCode: false` to allow assertion of expected failure.

---

## 💡 Why This Design?

- Emulates real-world API testing using **contract validation**, **negative testing**, and **status-code assertions**
- Uses **Page Object Model** for maintainability and separation of concerns
- Each test case includes assertion logic based on the [Fluency API documentation](https://backpack-staging.fluencyinc.co/api-doc/)

---

## 🛠️ Installation & Setup

If this were a real API testing project, follow the steps below to install Cypress and run the tests:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/naghattas/fluency-api-audience-mock-tests.git
cd fluency-api-audience-mock-tests
```
### 2️⃣ Install Cypress
```bash
npm install
```
### 3️⃣ Run Cypress Test Runner (UI mode)
```bash
npx cypress open
```
### Or run headless:
```bash
npx cypress run
```
### ⚙️ Configuration (cypress.config.js)
```bash
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://backpack-staging.fluencyinc.co",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
```
🧪 This mock configuration allows Cypress to hit sample endpoints for demonstration purposes only.

### 🔒 Authentication Note

This test suite does **not** use authentication. In a real-world setup, you would:

- Inject bearer tokens into `cy.request()` headers  
- Add environment variables for sensitive values  
- Chain token requests if OAuth flows were involved  

---

### 🚀 Possible Future Enhancements

- Add schema validation using `cy.task('validateSchema')`  
- Load dynamic test data from fixtures  
- Implement retry logic for async endpoint stabilization  

## 🧠 Test Plan

### 🔍 Scope

This test plan covers the **Audience Management** endpoints within Fluency’s customer-facing API. The purpose is to validate that audience creation, retrieval, updating, and listing functionalities behave as expected under both normal and failure scenarios.

### 🎯 Objectives

- Validate correct handling of audience-related operations (`GET`, `POST`, `PUT`)
- Ensure API responses match expected status codes and contract structure
- Verify robust error handling for invalid input and edge cases
- Demonstrate test design and structure using the Page Object Model (POM)

### 📌 In-Scope Endpoints

| Method | Endpoint                                           | Purpose                            |
|--------|----------------------------------------------------|------------------------------------|
| GET    | `/api/v2/audience/type`                            | List allowed audience types        |
| GET    | `/api/v2/audience/{customerAccountId}`             | List all account audiences         |
| POST   | `/api/v2/audience/{customerAccountId}`             | Create a new audience              |
| GET    | `/api/v2/audience/{accountAudienceId}/stats`       | Get statistics for an audience     |
| PUT    | `/api/v2/audience/{customerAccountId}/{accountAudienceId}` | Update an audience                 |

### 🧪 Test Coverage

#### ✅ Positive Scenarios (Expected to Pass)

| # | Test Case Description                                                    | Status Code |
|---|---------------------------------------------------------------------------|-------------|
| 1 | List allowed audience types returns `200` and valid `types` array       | 200         |
| 2 | Create a valid audience (with name, partners, and status) returns `201` | 201         |
| 3 | Fetch stats for a valid `audienceId` returns expected schema            | 200         |
| 4 | Update an audience with a valid payload updates successfully            | 200         |

#### ❌ Negative Scenarios (Expected to Fail)

| # | Test Case Description                                                           | Status Code |
|---|----------------------------------------------------------------------------------|-------------|
| 5 | Attempt to create an audience without the required `name` field                 | 400         |
| 6 | Request stats using an invalid or nonexistent `audienceId`                     | 404         |
| 7 | Update an audience with an invalid `status` type (e.g., integer instead of enum)| 400         |
| 8 | Retrieve audiences for an invalid `customerAccountId`                          | 404         |

All failing tests use `failOnStatusCode: false` to assert failure conditions directly.

### 🧱 Test Types

- **Functional**: Validate that each endpoint behaves as documented  
- **Negative**: Ensure system handles invalid inputs gracefully  
- **Contract**: Verify response structure matches expected keys/properties  
- **Boundary (implicit)**: Cover edge cases such as missing fields or bad IDs

### 🔄 Test Data Assumptions

- `123456` = Valid customer account ID  
- `123` = Valid audience ID  
- `999999` = Invalid customer account ID  
- `0` = Invalid audience ID  
- Example payloads taken directly from API documentation

### ⚙️ Execution Notes

These tests are mocked and do **not hit a real backend**. They are structured for review purposes only and assume the API responds exactly as documented.

### 🧠 Test Design Strategy

- Uses **Cypress + Page Object Model** for clarity and reuse  
- Covers **80% of the endpoint footprint** with just 8 test cases  
- Mix of **success paths** and **intentionally failing scenarios**  
- Code-first validation of **status codes**, **required fields**, and **response schema**

---

## 🔗 Submission

This mock suite was created for evaluation and can be reviewed here:  
[🔗 GitHub Repository](https://github.com/naghattas/fluency-api-audience-mock-tests)



