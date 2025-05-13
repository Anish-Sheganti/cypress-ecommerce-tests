describe('Checkout Flow Test', () => {
  it('should complete the checkout process', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');

    // Add to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // Checkout steps
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type('Kavya');
    cy.get('[data-test="lastName"]').type('Sri');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.contains('Thank you for your order').should('be.visible');
  });
});
