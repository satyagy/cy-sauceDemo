const password = Cypress.env('PASSWORD') 

Cypress.Commands.add('Login',(username) => {
    cy.fixture('login.elements').then( (webElement) => {
        cy.get(webElement.usernameField).should('be.visible').type(username)
        cy.get(webElement.passwordField).should('be.visible').type(password)
        cy.get(webElement.loginButton).should('be.visible').click()
    })
})