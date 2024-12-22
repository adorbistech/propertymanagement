describe('Authentication', () => {
  it('allows a user to register and login', () => {
    // Register
    cy.visit('/register')
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('testuser@example.com')
    cy.get('input[name="password"]').type('password123')
    cy.get('button[type="submit"]').click()

    // Should be redirected to login page
    cy.url().should('include', '/login')

    // Login
    cy.get('input[name="email"]').type('testuser@example.com')
    cy.get('input[name="password"]').type('password123')
    cy.get('button[type="submit"]').click()

    // Should be redirected to dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome, Test User')
  })
})

