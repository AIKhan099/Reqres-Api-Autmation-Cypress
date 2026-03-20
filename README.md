# About This Repo:
This repository contains API automation tests for the Reqres API using Cypress. The tests cover various endpoints and scenarios, including user registration, login, and data retrieval. The tests are written in a BDD style using Cucumber, making them easy to read and understand. The project is structured to promote maintainability and scalability, allowing for easy addition of new tests and features in the future.

## How to run this:
1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies using `npm install`.
3. Run the tests using `npx cypress run --spec "cypress/e2e/002_cucumberFeatures/reqresApiAutomation.feature"` to execute the tests in headless mode.