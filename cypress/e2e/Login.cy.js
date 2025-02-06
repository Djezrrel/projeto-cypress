describe('Orange Teste', () => {
  it.skip('Login teste', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-text--h6').contains('Dashboard')
  })

  it('User errado', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('ADEMI')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })

  it('Senha errado', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('ADEMI')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/login')
    cy.get('.oxd-alert')
  })


})