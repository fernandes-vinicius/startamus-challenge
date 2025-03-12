describe('"I\'m Feeling Lucky" Button', () => {
  it('should load a random joke when clicked', () => {
    cy.visit('http://localhost:3000/')

    // Intercepts the API request for a random joke and returns mock data
    cy.intercept('GET', 'https://api.chucknorris.io/jokes/random', {
      statusCode: 200,
      body: {
        categories: [],
        created_at: '2020-01-05 13:42:22.089095',
        icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
        id: 'Tck4XfHyQt-90ruRqbn_fw',
        updated_at: '2020-01-05 13:42:22.089095',
        url: 'https://api.chucknorris.io/jokes/Tck4XfHyQt-90ruRqbn_fw',
        value: 'Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.',
      },
    }).as('randomJoke')

    // Wait for the page to load before interacting
    cy.wait(1000)

    // Clicks the "I'm Feeling Lucky" button
    cy.get('button').contains("I'm Feeling Lucky").click()

    // Waits for the API response
    cy.wait('@randomJoke')

    // Checks if the joke is displayed correctly
    cy.get('.joke-value').should('be.visible')
    cy.get('.joke-value').should(
      'contain.text',
      'Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.',
    )
  })
})
