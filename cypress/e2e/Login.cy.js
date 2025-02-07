
//criou uma constante onde tem user valido/não valido em fixture e chamou
import userData from '../fixtures/userData.json'

describe('Orange Teste', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButtom: ".oxd-button",
    selectiontitletopbar: ".oxd-text--h6",

  }



  it('Login teste valido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectiontitletopbar).contains('Dashboard')
  })

  it('Login User errado', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })

  it('Login Senha errado', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })


})