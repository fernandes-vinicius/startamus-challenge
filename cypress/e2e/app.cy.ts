describe('Navigation', () => {
  it('should navigate to the search page via form submission', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find the input field with name "query" and type "Horse"
    cy.get('input[name="query"]').type('Horse')

    // Submit the form
    cy.get('form').submit()

    // The new url should include "/search?query=Horse"
    cy.url().should('include', '/search?query=Horse')
  })
})
