const username = Cypress.env("USERS");

describe("SauceDemo Login", () => {
  it("Login as standard user", () => {
    cy.Login(username["standardUser"]);
  });

  it("Login as locked user", () => {
    cy.Login(username["lockedUser"]);
  });

  it("Login as problem user", () => {
    cy.Login(username["problemUser"]);
  });

  it("Login as glitch user", () => {
    cy.Login(username["glitchUser"]);
  });
});
