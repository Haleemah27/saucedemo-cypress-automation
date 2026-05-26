import LoginPage from "../Page/LoginPage.js"
import ProductPage from "../Page/ProductsPage";

describe('Products', ()=>{
beforeEach(() => {
    cy.visit('/')
    cy.fixture('saucedemo').then((data) => {
      const ln = new LoginPage()
      ln.enterUsername(data.standardUserlogin.username)
      ln.enterPassword(data.standardUserlogin.password)
      ln.clickLogin()
    })
  })
  it('Get total number of products', () => {
    const pp = new ProductPage()
    pp.getAllProducts()
  })

  it('View Product details', () => {
    const pp = new ProductPage()
    pp.viewProduct()
    pp.verifyPrice()
  })

  it('Add product to Cart', () => {
    const pp = new ProductPage()
    pp.viewProduct()
    pp.addProductToCart()
     pp.verifyCartBadge('1')
  })

    it('Add multiple products to Cart', () => {
    const pp = new ProductPage()
    pp.addMultipleProductsToCart()
    pp.verifyCartBadge('3')
  })
  

  it('Remove Product from Cart', () => {
    const pp = new ProductPage()
    pp.viewProduct()
    pp.addProductToCart()
    pp.removeProduct()
   pp.verifyRemovedProduct()
  })

 it('Filter products A to Z', () => {
    const pp = new ProductPage()
    pp.selectFilter('az')
    pp.verifyFilterAtoZ()
})

it('Filter products Z to A', () => {
    const pp = new ProductPage()
    pp.selectFilter('za')
    pp.verifyFilterZtoA()
})


it('Filter by Price Low to High', () => {
        const pp = new ProductPage()
        pp.selectFilter('lohi')
        pp.verifyFilterLowToHigh()
    })

it('Filter by Price High to Low', () => {
        const pp = new ProductPage()
        pp.selectFilter("hilo")
        pp.verifyFilterHighToLow()
    })

})
