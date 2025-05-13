describe('Product Search Test', () => {
  it('should allow the user to search and view a product', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')

    // Simulate "search" by checking the presence of a product name
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
      .should('be.visible')
  })
})
