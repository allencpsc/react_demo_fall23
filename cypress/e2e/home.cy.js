describe('template spec', () => {
  it('home link', () => {
    cy.visit('http://localhost:3000')
    cy.get(".navbar-brand").contains('Navbar')
    cy.get(".nav-link").contains("Home").click()
    cy.location("pathname").should('eq', '/')
  })

  it('Features link', () => {
    cy.visit('http://localhost:3000')
    cy.get(".navbar-brand").contains('Navbar')
    cy.get(".nav-link").contains("Features").click()
    cy.location("pathname").should('eq', '/Features')
  })

  it('Pricing link', () => {
    cy.visit('http://localhost:3000')
    cy.get(".navbar-brand").contains('Navbar')
    cy.get(".nav-link").contains("Pricing").click()
    cy.location("pathname").should('eq', '/Pricing')
  })

})
