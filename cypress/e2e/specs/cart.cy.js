
import Cart from '../pageobjects/cart.page'

describe('Cart page', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(3000)
        cy.get('#product-0 > #add-to-cart').should('be.visible').click()
        cy.get('section.snipcart-cart__content').should('be.visible')
    })

    it('Cart icon shows number of items in cart', ()=>{
        cy.get(Cart.cartIcon).should('have.text', " 1 ");
        cy.get(Cart.cartItemContainer).should('be.visible');
    })

    it('Empty cart shows appropriate message', ()=>{
        cy.wait(5000)
        Cart.remove()
        cy.wait(5000)
        cy.get('.snipcart-empty-cart__title').should('have.text', ' Your cart is empty. ')

        cy.get(Cart.cartItemContainer).should('not.exist');
        cy.get(Cart.checkoutBtn).should('not.exist')
    })

    it('Appropriate page title is present', ()=>{
        cy.get(Cart.cartTitle).should('have.text', ' Cart summary ')
    })
})