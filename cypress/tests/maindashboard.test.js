/// <reference types="Cypress" />

//const { contains } = require('cypress/types/jquery');
const login = require('./utils/login')

describe('Dashboard', () => {
  it('can load', () => {
    login().then(() => {
      cy.contains('Jobs')

      //Check filtersS
      cy.get('#filter').click()
      cy.get('#CancelFilterBtn').click()
      cy.get('#filter').click()
      cy.get('#clearFilterSelections').click()
      cy.get('#applyTagsBtn').click()
      cy.get('#selectedMenuOption').click()

      //Check cost types
      cy.contains('Labor').click()
      cy.get('#selectedMenuOption').click()
      cy.contains('Total').click()

      //Search 
      cy.get('.dx-texteditor-input').click().type('Earth')
      cy.wait(2000)
      cy.get('[class="dx-clear-button-area"]').click()

      //Pagination
      //cy.get('[class="dx-page"]').contains('2').click()

      //Click on Job
      cy.contains('1-UTIL').click()
      cy.wait(4000)

      //Check Total Budgets
      cy.get('[aria-label="Column Budgeted, Value $19,057,999"]').should('contain', '$19,057,999')
      cy.get('[aria-label="Column Budgeted, Value $2,014,925"]').should('contain', '$2,014,925')
      cy.get('[aria-label="Column Expected, Value $4,636"]').should('contain', '$4,636')
      cy.get('[aria-label="Column Actual, Value $12,800"]').should('contain', '$12,800')
      cy.get('#selectedMenuOption').click()

      //Check Labor
      cy.get('[selection="Labor"] > a').click()
      cy.get('[aria-label="Column Variance, Value $2,092"] > .hcss-green-text').should('contain', '$2,092')
      cy.get('[aria-label="Column Expected, Value $2,564"]').should('contain', '$2,564')
      cy.get('[aria-label="Column Expected Hrs, Value 108"]').should('contain', '108')
      cy.get('[aria-label="Column Actual, Value $472"]').should('contain', '$472')
      cy.get('#selectedMenuOption').click()

      //Check Equipment
      cy.get('[selection="Equipment"] > a').click()
      cy.get('[aria-label="Column Variance, Value $1,163"] > .hcss-green-text').should('contain', '$1,163')
      cy.get('[aria-label="Column Expected, Value $1,343"]').should('contain', '$1,343')
      cy.get('[aria-label="Column Expected Hrs, Value 36"]').should('contain', '36')
      cy.get('[aria-label="Column Actual, Value $180"]').should('contain', '$180')
      cy.get('#selectedMenuOption').click()

      //Check Material
      cy.get('[selection="Material"] > a').click()
      cy.get('[aria-label="Column Budgeted, Value $147,232"]').should('contain', '$147,232')
      cy.get('[aria-label="Column Budgeted, Value $1,038,079"]').should('contain', '$1,038,079')
      cy.get('#selectedMenuOption').click()
 
      //Check Subcontract
      cy.get('[selection="Subcontract"] > a').click()
      cy.get('[aria-label="Column Budgeted, Value $66,650"]').should('contain', '$66,650')
      cy.get('[aria-label="Column Budgeted, Value $2,490,349"]').should('contain', '$2,490,349')
      cy.get('#selectedMenuOption').click()

      //Check Supplies
      cy.get('[selection="CostType1"] > a').click()
      cy.get('[aria-label="Column Budgeted, Value $9,100"]').should('contain', '$9,100')
      cy.get('[aria-label="Column Expected, Value $300"]').should('contain', '$300')
      cy.get('[aria-label="Column Actual, Value $1,050"]').should('contain', '$1,050')
      cy.get('[aria-label="Column Variance, Value ($750)"] > .hcss-red-text').should('contain', '$750')
      cy.get('#selectedMenuOption').click()

      //Check Trucking
      cy.get('[selection="CostType0"] > a').click()
      cy.get('[aria-label="Column Budgeted, Value $9,450"]').should('contain', '$9,450')
      cy.get('[aria-label="Column Expected, Value $429"]').should('contain', '$429')
      cy.get('[aria-label="Column Actual, Value $11,098"]').should('contain', '$11,098')
      cy.get('[aria-label="Column Variance, Value ($10,669)"] > .hcss-red-text').should('contain', '$10,669')
      cy.get('#selectedMenuOption').click()

      
  })
});


  })