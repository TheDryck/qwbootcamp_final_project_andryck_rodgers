
describe('Adding/removing products to/from the cart', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        //cy.get('#product-0 > div.css-5ge9zd > div.chakra-aspect-ratio.css-791950 > img.chakra-image.css-2i84d9').click()
    })

    it('Add single product to cart', ()=>{
        //cy.get('#add-to-cart').click()
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)
        cy.get('#product-0 > #add-to-cart').should('be.visible').click()
        cy.get('section.snipcart-cart__content').should('be.visible')
        
        //cy.url().should('contain', '/cart');
        //cy.get('div.snipcart-modal__container').should('exist');
        //cy.get('div.snipcart-modal__container > div > header.snipcart-cart-header > div.snipcart-cart-header__options > button').should('have.text', 1);
        cy.get('.snipcart-cart-header__option').should('have.text', " 1 ");
        cy.get('.snipcart-item-quantity__quantity > .snipcart__font--secondary').should('have.text', 1);
        //cy.get('button[title=Remove item]').should('be.visible');

    })

    it('Increase number of items in cart', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)
        cy.get('#product-0 > #add-to-cart').should('be.visible').click()
        cy.get('section.snipcart-cart__content').should('be.visible')

     
        cy.get('[aria-label="Increment quantity"]').click();

        cy.get('.snipcart-cart-header__option').should('have.text', " 2 ");
        cy.get('.snipcart-item-quantity__quantity > .snipcart__font--secondary').should('have.text', 2);
        
    })

    it('Remove items from cart', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)
        cy.get('#product-0 > #add-to-cart').should('be.visible').click()
        cy.get('section.snipcart-cart__content').should('be.visible')

        cy.wait(2000)
        cy.get('.snipcart-item-line__header > .snipcart-button-icon').click();

        cy.get('.snipcart-cart-header__option').should('have.text', " 0 ");
        cy.get('.snipcart-empty-cart__title').should('have.text', ' Your cart is empty. ')
    })
})