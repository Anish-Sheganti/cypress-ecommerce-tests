describe('Form Validation Test', () => {
  it('should show validation messages when required fields are empty', () => {
    cy.visit('https://www.saucedemo.com/');

    // Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Go to Cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    // Begin Checkout
    cy.get('[data-test="checkout"]').click();

    // Try continuing without filling fields
    cy.get('[data-test="continue"]').click();

    // Assert error message is shown
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: First Name is required');
  });
});
