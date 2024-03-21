describe('login tests', () => {
  it('successful login', () => {
    cy.visit('http://localhost:3000');
    cy.get(".navbar-toggler").click();
    cy.get("#sign-in-button").click();
    cy.get("#InputEmail").type("lacko@gmail.com");
    cy.get('#InputPassword').type("Lackojelszava01");
    cy.get(".login-button").click();
    cy.get(".modal-text").should('contain', "Successful login");
  })

  it('unsuccessful login', () => {
    cy.visit('http://localhost:3000');
    cy.get(".navbar-toggler").click();
    cy.get("#sign-in-button").click();
    cy.get("#InputEmail").type("lacika@gmail.com");
    cy.get('#InputPassword').type("Lacikajelszava01");
    cy.get(".login-button").click();
    cy.get(".alert-message").should('contain', "Invalid Email or Password.");
  })
}) 