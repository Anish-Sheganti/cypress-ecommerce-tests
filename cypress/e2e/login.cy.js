describe('E-commerce Login Test', () => {
  it('should visit the login page and submit login form', () => {
    // Replace with a real E-commerce site with a login page
    cy.visit('https://www.saucedemo.com/'); 

    // Fill username and password fields
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Click login button
    cy.get('#login-button').click();

    // Assert successful login by checking URL or some dashboard element
    cy.url().should('include', '/inventory.html');
  });
});

