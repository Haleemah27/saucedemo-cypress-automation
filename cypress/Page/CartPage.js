class CartPage{

viewCart(){

    cy.get('#shopping_cart_container').click()
}
verifyMultipleProductsInCart(){
    cy.get('.cart_item').should('have.length', 3)
}
removeProduct(){
    cy.get('[class="btn btn_secondary btn_small cart_button"]').click()
}

clickCheckout(){

    cy.get('#checkout').click()
}

enterUserFirstName(firstName){

    cy.get('#first-name').type(firstName)

}

enterUserLastName(lastName){

    cy.get('#last-name').type(lastName)
}

enterZipCode(zipCode){
    cy.get('#postal-code').type(zipCode)

}

clickContinue(){

    cy.get('#continue').click()

}

verifyPaymentInformation(){
    cy.get('[data-test="payment-info-value"]')
      .should('contain.text', 'SauceCard #31337')
}

verifyShippingInformation(){
    cy.get('[data-test="shipping-info-value"]')
      .should('contain.text', 'Free Pony Express Delivery!')
}

verifyTotalPrice(){
    cy.get('.summary_total_label')
      .should('contain.text', 'Total:')
}

completeCheckout(){

    cy.get('#finish').click()
}


verifySuccessMessage(){

    cy.get('[class="complete-header"]').should('have.text','Thank you for your order!')
}

verifyEmptyFirstNameError(){
    cy.get('[data-test="error"]').should('contain.text', 'First Name is required')
}

verifyEmptyLastNameError(){
    cy.get('[data-test="error"]').should('contain.text', 'Last Name is required')
}

verifyEmptyZipCodeError(){
    cy.get('[data-test="error"]').should('contain.text', 'Postal Code is required')
}

verifyProductInCart(){
    cy.get('.cart_item').should('have.length', 1)
}
verifyProductQuantity(){
cy.get('.cart_quantity').should('have.text', '1')
}

verifyProductPriceInCart(){
    cy.get('.inventory_item_price').should('contain.text', '$')
}

removeProductVerification(){
    
    cy.get('.cart_item').should('not.exist')
}
}


export default CartPage;