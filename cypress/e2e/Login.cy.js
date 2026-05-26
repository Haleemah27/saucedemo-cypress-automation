import LoginPage from "../Page/LoginPage.js"

describe('Users Login', ()=>{
beforeEach(() => {
    cy.visit('/')
    
  })

it('Standard User Login with Valid Credentials', ()=>{
     cy.fixture('saucedemo').then((data) => {

    const ln=new LoginPage ();
    ln.enterUsername(data.standardUserlogin.username)
    ln.enterPassword(data.standardUserlogin.password)
    ln.clickLogin()
    ln.verifyLogin()
    

})
})

it('Login as a Locked Out User', ()=>{

     cy.fixture('saucedemo').then((data) => {

    const ln=new LoginPage ();
    ln.enterUsername(data.lockedOutUser.username)
    ln.enterPassword(data.lockedOutUser.password)
    ln.clickLogin()
    ln.verifyLockedOutUserError()

})
})


it('Login with Invalid Credentials', ()=>{
     cy.fixture('saucedemo').then((data) => {

    const ln=new LoginPage ();
    ln.enterUsername(data.invalidCredentials.username)
    ln.enterPassword(data.invalidCredentials.password)
    ln.clickLogin()
    ln.verifyErrorMessage()
    

})
})


it('Login with empty Fields', ()=>{

    const ln=new LoginPage ();
    ln.clickLogin()
    ln.verifyFieldErrorMessage()
    

})
})



    

