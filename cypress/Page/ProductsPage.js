
class ProductPage{

getAllProducts() {
  cy.get('.inventory_item_name').should('have.length', 6)
}

viewProduct(){
    cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").click()
}

addProductToCart(){
    cy.get('[name="add-to-cart"]').click()
}

addMultipleProductsToCart() {
    cy.get('[name="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[name="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[name="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
}

verifyCartBadge(count){
    cy.get('.shopping_cart_badge').should('have.text', count)
}
verifyPrice(){
    cy.get('[class="inventory_details_price"]').should('have.text','$29.99')

}
removeProduct(){
    cy.get('[name="remove"]').click()

}

verifyRemovedProduct(){
      cy.get('[name="add-to-cart"]').should('be.visible')
}
selectFilter(filterOption){
    cy.get('.product_sort_container').select(filterOption)
}

verifyFilterAtoZ(){
    cy.get('.inventory_item_name').then(($items) => {
        const names = [...$items].map(el => el.innerText)
        const sorted = [...names].sort()
        expect(names).to.deep.equal(sorted)
    })
}

verifyFilterZtoA(){
    cy.get('.inventory_item_name').then(($items) => {
        const names = [...$items].map(el => el.innerText)
        const sorted = [...names].sort().reverse()
        expect(names).to.deep.equal(sorted)
    })
}

verifyFilterLowToHigh(){
    cy.get('.inventory_item_price').then(($prices) => {
        const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$','')))
        const sorted = [...prices].sort((a,b) => a - b)
        expect(prices).to.deep.equal(sorted)
    })
}

verifyFilterHighToLow(){
    cy.get('.inventory_item_price').then(($prices) => {
        const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$','')))
        const sorted = [...prices].sort((a,b) => b - a)
        expect(prices).to.deep.equal(sorted)
    })
}

}
export default ProductPage;