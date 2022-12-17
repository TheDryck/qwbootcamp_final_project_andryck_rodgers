
describe('Change product list items based on search parameters', ()=>{
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

    it('Search for products that match valid substring', ()=>{
        cy.get('#search').type('hat');
        cy.wait(2000)
        cy.get('.css-12qzrsi').children().should('have.length', 2)
    })

    it('Search using invalid numeric substring', ()=>{
        cy.get('#search').type('12');
        cy.wait(2000)
        cy.get('.css-12qzrsi').children().should('have.length', 0)
    })

    it('Search using valid string that does not match any products', ()=>{
        cy.get('#search').type('big');
        cy.wait(2000)
        cy.get('.css-12qzrsi').children().should('have.length', 0)
    })
})