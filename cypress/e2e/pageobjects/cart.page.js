class Cart{
    get backBtn(){
        return ('snipcart-cart-header__close-button')
    }

    get cartTitle(){
        return ('.snipcart-cart-header__title')
    }

    get cartIcon(){
        return ('.snipcart-cart-header__option')
    }

    get cartItemContainer(){
        return ('.snipcart-item-line__container')
    }

    get checkoutBtn(){
        return ('.snipcart-button-primary')
    }

    remove(){
        cy.get('.snipcart-item-line__header > .snipcart-button-icon').click()
    }
}

export default new Cart()