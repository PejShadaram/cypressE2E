 /// <reference types="Cypress" />

//const { contains } = require('cypress/types/jquery');
const login = require('./utils/login')

describe('Forecast', () => {
  it('can load', () => {
    login().then(() => {
      cy.get('.nav > :nth-child(3) > a > .menu-text').click()
    
      //Check Flyout filter

      //Filter to Active jobs and count
      cy.intercept('https://heavyjob-stage.hcssapps.com/api/ForecastJobs/GetJobs').as('Jobs')
      cy.get('.sc-esjQYD').click()
      cy.get('#jobsFilterType > :nth-child(1)').click()
      cy.get('.sc-jzgbtB > .btn').click()
      cy.wait('@Jobs').its('response.body').should('have.length', 4)
      
      //Start a New Forecast from Budget
      cy.get('.react-grid-Cell react-grid-Cell--frozen').first().click()      
      cy.get(':nth-child(42) > abbr').click()
      cy.get('[data-testid=ConfirmButton]').click()
      cy.get('.sc-TFwJa > .modal-dialog > .modal-content > .modal-footer > .btn-info').click()



      
  })
})


  })