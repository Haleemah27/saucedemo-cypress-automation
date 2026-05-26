class LoginPage{


 enterUsername(username)
 {
    cy.get('#user-name').type(username)
 }

 enterPassword(password)
 {
    cy.get('#password').type(password)
 }

clickLogin()
{
    cy.get('#login-button').click()
}

verifyLogin()
{
cy.contains('Products').should('be.visible')
}

verifyErrorMessage()
{
cy.get('.error-message-container.error').should('contain.text','Username and password do not match any user in this service')
}


verifyFieldErrorMessage()
{
cy.get('.error-message-container.error').should('contain.text','Username is required')
}


verifyLockedOutUserError()
{
   cy.get('.error-message-container.error').should('contain.text', 'Sorry, this user has been locked out.')
}
}

export default LoginPage;