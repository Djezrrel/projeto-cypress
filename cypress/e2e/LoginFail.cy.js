import userData from '../fixtures/userData.json';
import selectors from '../support/selectors';

describe('Testes de Login com Falha no OrangeHRM', () => {
  
  it('Tentativa de login com usuário inválido', () => {
    cy.visit('/auth/login');
    cy.get(selectors.usernameInput).type(userData.userfail.username);
    cy.get(selectors.passwordInput).type(userData.userSuccess.password);
    cy.get(selectors.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/auth/login');
    cy.get('body').should('contain', 'Invalid credentials');
    cy.get(selectors.alertMessage);
  });

  it('Tentativa de login com senha inválida', () => {
    cy.visit('/auth/login');
    cy.get(selectors.usernameInput).type(userData.userSuccess.username);
    cy.get(selectors.passwordInput).type(userData.userfail.password);
    cy.get(selectors.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/auth/login');
    cy.get('body').should('contain', 'Invalid credentials');
    cy.get(selectors.alertMessage);
  });
});
