import Product from '../pageobjects/product.page'

describe('Wishlist', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })
    })

    it('Add single item to Favourites from Homepage', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)

        cy.get(`#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > ${Product.selectFavourite}`).click()
        cy.get('.chakra-alert').should('be.visible');
        cy.get('#top-favorite > .chakra-text.css-0').should('contain', "1")

        //cy.get('#top-favorite').click()
    })

    it('Add item to Favourites from Product details', ()=>{
        cy.get('#product-0 > div.css-5ge9zd > div.chakra-aspect-ratio.css-791950 > img.chakra-image.css-2i84d9').click()

        cy.get(Product.selectFavourite).click()
        cy.get('.chakra-alert').should('be.visible');
        cy.get('#top-favorite > .chakra-text.css-0').should('contain', "1")

    })

    it('Remove item from Favourites on the Product details page', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)

        cy.get(`#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > ${Product.selectFavourite}`).click()
        cy.get('#product-0 > div.css-5ge9zd > div.chakra-aspect-ratio.css-791950 > img.chakra-image.css-2i84d9').click()

        cy.get(Product.removeFavourite).click()
        cy.get('.chakra-alert').should('be.visible');
        cy.get('#top-favorite > .chakra-text.css-0').should('contain', "0")

    })

    it('Check that added products are on Favourites page', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)

        cy.get(`#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > ${Product.selectFavourite}`).click()
        cy.get(`#product-1 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > ${Product.selectFavourite}`).click()
        cy.get('#top-favorite').click()

        cy.get('div.chakra-container > h2.chakra-heading').should('have.text', 'Favorites')
        cy.get('.css-12qzrsi').children().should('have.length', 2)
        cy.get('#remove-favorite-btn').should('be.visible')
    })

    it('Remove item wishlist on Favourites page', ()=>{
        cy.get('#product-0 > #add-to-cart').scrollIntoView()
        cy.wait(2000)

        cy.get(`#product-1 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > ${Product.selectFavourite}`).click()
        cy.get('#top-favorite').click()

        cy.get('#remove-favorite-btn').click()
        cy.get('.chakra-alert').should('be.visible');
        cy.get('.css-12qzrsi').should('not.exist')
    })
})