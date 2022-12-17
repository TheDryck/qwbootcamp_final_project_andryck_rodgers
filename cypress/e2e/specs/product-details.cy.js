
describe('Product details', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        cy.get('#product-0 > div.css-5ge9zd > div.chakra-aspect-ratio.css-791950 > img.chakra-image.css-2i84d9').click()
    })

    it('Back to products button is present', ()=>{
        cy.get('h2.chakra-heading.css-18j379d').should('be.visible');
        cy.get('h2.chakra-heading.css-18j379d').should('have.text', 'Back to products');
        cy.get('h2.chakra-heading.css-18j379d').should('be.visible');
        cy.get('svg ~ h2.chakra-heading.css-18j379d').should('be.visible');
    })

    it('Check for add to cart button', ()=>{
        cy.get('#add-to-cart').should('be.visible');
        cy.get('#add-to-cart').should('have.text', 'Add To Cart');
        cy.get('#add-to-cart > span.chakra-button__icon.css-1wh2kri > svg').should('be.visible');
    })

    it('Dot selector changes image displayed', ()=>{
        cy.get('ul.control-dots > li[value=1]').click()
        cy.get('li.slide.selected > div > p.legend').should('have.text', 'Image 2')

        cy.get('ul.control-dots > li[value=0]').click()
        cy.get('li.slide.selected > div > p.legend').should('have.text', 'Image 1')
    })
})