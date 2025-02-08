
//criou uma constante onde tem user valido/não valido em fixture e chamou
import userData from '../fixtures/userData.json'


describe('Orange Teste', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButtom: ".oxd-button",
    selectiontitletopbar: ".oxd-text--h6",
    infoButtom: "[href='/web/index.php/pim/viewMyDetails']",
    firstName: ".orangehrm-firstname",
    MiddleName: ".orangehrm-middlename",
    LastName: ".orangehrm-lastname",
    GenericnickName: ".oxd-input", //lista com vários elementos,sem id especifico 
    Date_campo:".oxd-input--active[placeholder='yyyy-dd-mm']",
    Close_date: ".--close",
    Salvando: ".oxd-button--secondary",
    GeneriComboBox: ".oxd-select-text--arrow",
    MorF: ".oxd-radio-wrapper",
    test_field: "[options='']",
   

  }



  it.only('Login teste valido', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectiontitletopbar).contains('Dashboard')
    cy.get(selectorsList.infoButtom).click()

    cy.get(selectorsList.firstName).clear().type("Julião")
    cy.get(selectorsList.MiddleName).clear().type("Balton")
    cy.get(selectorsList.LastName).clear().type("Nrothem")
  
    cy.get(selectorsList.GenericnickName).eq(4).clear().type("EmPLYtest") //e o elemento 4º da lista
    cy.get(selectorsList.GenericnickName).eq(5).clear().type("66592")
    cy.get(selectorsList.GenericnickName).eq(6).clear().type("230910")
    cy.get(selectorsList.GenericnickName).eq(7).clear().type('2025-02-08')
    cy.get(selectorsList.Close_date).click()

    cy.get(selectorsList.GeneriComboBox).eq(0).click()
    cy.get(':nth-child(27)').click()
    cy.get(selectorsList.GeneriComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(selectorsList.Date_campo).eq(1).clear().type('1980-10-18')
    cy.get(selectorsList.MorF).eq(0).click()

    cy.get(selectorsList.Salvando).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast')

    cy.get(selectorsList.GeneriComboBox).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(5)').click()

    cy.get(selectorsList.test_field).clear().type(445)

    cy.get(selectorsList.Salvando).eq(1).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast')

    
  })

  it('Login User errado', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })

  it('Login Senha errado', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userfail.password)
    cy.get(selectorsList.loginButtom).click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })


})