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



