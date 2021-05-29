// Simple helper function that provides a declarative way to quickly and easily
// log in and authenticate the user.
function login() {
    var promise = new Cypress.Promise((resolve, reject) => {
      cy.visit(Cypress.env('hjwhome'))
  
      cy.url().then(url => {
        try {
          if (url.includes('/login')) {
              cy.get('input[name="username"]').first().click().type(Cypress.env('hjwuser'))

              cy.contains('Next').click()
             
    
              cy.get('input[name="password"]').first().click().type(Cypress.env('hjwpassword')).type('{enter}')
            }
          cy.url().should('include', 'https://heavyjob-stage.hcssapps.com/')
          resolve();
        } catch(e) {
          reject(e)
        }
      })
    })

    return promise;
}

module.exports = login;