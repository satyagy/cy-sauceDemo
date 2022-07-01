Cypress.Commands.add('HomePage', () => {
    cy.fixture('homepage.elements').then( (webElement) => {
        cy.get(webElement.menu).should('be.visible').click()
        cy.get(webElement.logoutElement).should('be.visible').click()
    })
})