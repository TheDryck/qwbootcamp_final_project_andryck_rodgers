
import Product from '../pageobjects/product.page'
import Data from '../data/products.data'

describe('Sort and Filter products on Homepage', ()=>{
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

    it('Sort products from  A-Z', ()=>{
        Product.selectSort(Data.sort['A to Z'])

        Data.products.sort()

        cy.get(Product.itemName).each(($elem, index)=>{
            expect($elem.text()).equal(Data.products[index].name)
        })
    })

    it('Sort products in increasing order of price', ()=>{
        Product.selectSort(Data.sort['Low to High'])
        cy.wait(1500)
        Data.products.sort((a, b) => a.price - b.price);

        cy.get(Product.itemPrice).each(($elem, index)=>{
            expect($elem.text()).equal(`$${Data.products[index].price}`)
        })
    })

    it('Sort products in decreasing order of price', ()=>{
        Product.selectSort(Data.sort['High to Low'])
        cy.wait(1500)
        Data.products.sort((a, b) => b.price - a.price);

        cy.get(Product.itemPrice).each(($elem, index)=>{
            expect($elem.text()).equal(`$${Data.products[index].price}`)
        })
    })

})