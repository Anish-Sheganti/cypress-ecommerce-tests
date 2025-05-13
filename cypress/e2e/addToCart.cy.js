describe('Add to Cart Test', () => {
  it('should login and add a product to the cart', () => {
    // Visit login page
    cy.visit('https://www.saucedemo.com/');

    // Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Confirm we're on the products page
    cy.url().should('include', '/inventory.html');

    // Add first product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Check cart icon has "1"
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });
});
