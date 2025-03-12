describe('Home', () => {
  it('should visit the home page correctly', () => {
    cy.visit('http://localhost:3000/')

    cy.wait(1000) // Wait for the page to load

    // Verify the home page elements
    cy.contains('h1', 'Endless Jokes, Infinite Laughs!')
    cy.contains('h2', "We've gathered the best Chuck Norris jokes of all time in one app. Swipe for Laughs!")

    // Verify the search input exists
    cy.get('input[name="query"]').should('be.visible')

    // Verify if categories list isn't empty
    cy.get('ul').should('not.be.empty')
  })
})
