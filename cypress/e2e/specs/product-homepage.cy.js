
describe('Product Gallery Homepage', ()=>{
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

    it('Site header is correct', ()=>{
        cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
    
        cy.get('h2.chakra-heading').should('be.visible');
        cy.get('h2.chakra-heading.css-kmq9po').should('have.text', 'Automation Camp Store');
    })

    it('Filter options are available', ()=>{
        cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
    
        cy.get('#sort').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('#category').should('be.visible');
        cy.get('#reset').should('be.visible');
    })

    it('Sign out button is present', ()=>{
        cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
    
        cy.get('#top-sign-out').should('be.visible');
        cy.get('#top-sign-out').should('have.text', 'Sign Out');
        cy.get('#top-sign-out > span > svg').should('be.visible');
    })
})