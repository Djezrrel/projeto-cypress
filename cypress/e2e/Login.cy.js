import userData from '../fixtures/userData.json';
import selectors from '../support/selectors';

describe('Testes de Login e Atualização de Perfil no OrangeHRM', () => {
  it('Login com credenciais válidas e atualização de perfil', () => {
    cy.visit('/auth/login');
    
    // Login
    cy.get(selectors.usernameInput).type(userData.userSuccess.username);
    cy.get(selectors.passwordInput).type(userData.userSuccess.password);
    cy.get(selectors.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectors.dashboardTitle).contains('Dashboard');
    
    // Acessar perfil
    cy.get(selectors.profileButton).click();

    // Atualizar informações pessoais
    cy.get(selectors.firstNameInput).clear().type("Julião");
    cy.get(selectors.middleNameInput).clear().type("Balton");
    cy.get(selectors.lastNameInput).clear().type("Nrothem");
    
    // Atualizar apelidos e datas
    cy.get(selectors.nicknameInputs).eq(4).clear().type("EmPLYtest");
    cy.get(selectors.nicknameInputs).eq(5).clear().type("66592");
    cy.get(selectors.nicknameInputs).eq(6).clear().type("230910");
    cy.get(selectors.nicknameInputs).eq(7).clear().type('2025-02-08');
    cy.get('.--close').click()

    // Selecionar opções nos dropdowns
    cy.get(selectors.dropdownArrow).eq(0).click();
    cy.get(':nth-child(27)').click();
    cy.get(selectors.dropdownArrow).eq(1).click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();

    cy.get(selectors.dropdownArrow).eq(2).click();
    cy.get('.oxd-select-dropdown > :nth-child(4)').click();

    cy.get(selectors.testField).clear().type('12902')

    // Inserir data de nascimento e selecionar gênero
    cy.get(selectors.birthDateInput).eq(1).clear().type('1980-10-18');
    cy.get(selectors.genderRadio).eq(0).click();
    
    // Salvar alterações e verificar sucesso
    cy.get(selectors.saveButton).eq(0).click();
    cy.get(selectors.saveButton).eq(1).click();
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast');
  });
});
