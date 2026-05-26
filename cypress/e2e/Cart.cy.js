import LoginPage from "../Page/LoginPage.js"
import ProductPage from "../Page/ProductsPage";
import CartPage from "../Page/CartPage.js";

describe('Cart Tests', ()=>{
beforeEach(() => {
    cy.visit('/')
    cy.fixture('saucedemo').then((data) => {
      const ln = new LoginPage()
      ln.enterUsername(data.standardUserlogin.username)
      ln.enterPassword(data.standardUserlogin.password)
      ln.clickLogin()
    })
  })

   it('View Cart', ()=>{
    const pp = new ProductPage()
    const cp = new CartPage()
    pp.viewProduct()
    pp.addProductToCart()
    cp.viewCart()
    cp.verifyProductInCart()

    })

      it('View cart item quantity', ()=>{
    const pp = new ProductPage()
    const cp = new CartPage()
    pp.viewProduct()
    pp.addProductToCart()
    cp.viewCart()
    cp.verifyProductInCart()
    cp.verifyProductQuantity()

    })


      it('Verify price of item in cart', ()=>{
    const pp = new ProductPage()
    const cp = new CartPage()
    pp.viewProduct()
    pp.addProductToCart()
    cp.viewCart()
    cp.verifyProductInCart()
    cp.verifyProductPriceInCart()

    })

    it('Remove Product From Cart', ()=>{

        const cp = new CartPage()
        const pp = new ProductPage()
       pp.viewProduct()
       pp.addProductToCart()
       cp.viewCart()
       cp.removeProduct()
       cp.removeProductVerification()


    })

      it('Verify payment information on checkout', ()=>{

            cy.fixture('saucedemo').then((data) => {
       const cp = new CartPage()
       const pp = new ProductPage()

       pp.viewProduct()
       pp.addProductToCart()
       cp.viewCart()
       cp.clickCheckout()
       cp.enterUserFirstName(data.userInformation.firstName)
        cp.enterUserLastName(data.userInformation.lastName)
        cp.enterZipCode(data.userInformation.zipCode)
        cp.clickContinue()
        cp.verifyPaymentInformation()
        cp.verifyShippingInformation()
       cp.verifyTotalPrice()
        

    })
      })
    it('Successful Checkout', ()=>{

            cy.fixture('saucedemo').then((data) => {
       const cp = new CartPage()
       const pp = new ProductPage()

       pp.viewProduct()
       pp.addProductToCart()
       cp.viewCart()
       cp.clickCheckout()
       cp.enterUserFirstName(data.userInformation.firstName)
        cp.enterUserLastName(data.userInformation.lastName)
        cp.enterZipCode(data.userInformation.zipCode)
        cp.clickContinue()
        cp.completeCheckout()
        cp.verifySuccessMessage()

    })
     })



      it('Checkout with multiple products in cart', ()=>{

            cy.fixture('saucedemo').then((data) => {
       const cp = new CartPage()
       const pp = new ProductPage()

        pp.addMultipleProductsToCart()
        pp.verifyCartBadge('3')
        cp.viewCart()
        cp.verifyMultipleProductsInCart()
        cp.clickCheckout()
        cp.enterUserFirstName(data.userInformation.firstName)
        cp.enterUserLastName(data.userInformation.lastName)
        cp.enterZipCode(data.userInformation.zipCode)
        cp.clickContinue()
        cp.completeCheckout()
        cp.verifySuccessMessage()

    })
     })


     it('Checkout with empty First Name field', ()=>{

       const cp = new CartPage()
       const pp = new ProductPage()

       pp.viewProduct()
       pp.addProductToCart()
       cp.viewCart()
       cp.clickCheckout()
        cp.clickContinue()
        cp.verifyEmptyFirstNameError()
       
    })
    it('Checkout with empty Last Name field', () => {
    cy.fixture('saucedemo').then((data) => {
    const cp = new CartPage()
    const pp = new ProductPage()

    pp.viewProduct()
    pp.addProductToCart()
    cp.viewCart()
    cp.clickCheckout()
    cp.enterUserFirstName(data.userInformation.firstName) 
    cp.clickContinue()
    cp.verifyEmptyLastNameError()
  })
})
it('Checkout with empty Zip Code field', () => {
    cy.fixture('saucedemo').then((data) => {
    const cp = new CartPage()
    const pp = new ProductPage()

    pp.viewProduct()
    pp.addProductToCart()
    cp.viewCart()
    cp.clickCheckout()
    cp.enterUserFirstName(data.userInformation.firstName) 
    cp.enterUserLastName(data.userInformation.lastName)   
    cp.clickContinue()
    cp.verifyEmptyZipCodeError()
    })
    })
     })
       