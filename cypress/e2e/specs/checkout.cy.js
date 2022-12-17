describe('Product checkout', ()=>{
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
        cy.wait(2000)
        cy.get('#product-0 > #add-to-cart').should('be.visible').click()
        cy.get('section.snipcart-cart__content').should('be.visible')

        cy.get('.snipcart-button-primary').click()
    })

    it('Submit valid card details', ()=>{
        cy.wait(5000)
        cy.get('input[name="name"]').type('john doe');
        cy.get('input[name="email"]').type('doejon@email.com');
        cy.get('input[name="city"]').type('Miami');
        cy.get('input[name="postalCode"]').type('3141');
        cy.get('.snipcart-typeahead input').eq(0).type('United States{enter}',{force: true} )
        cy.get('.snipcart-typeahead input').eq(1).type('Florida',{force: true})
        cy.get('.snipcart-button-primary').click()

        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('1123')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.get('.snipcart-button-primary').click()

        cy.wait(5000);
        cy.get('h1.snipcart__font--subtitle').should('contain', 'Thank you for your order')
        cy.get('div.snipcart-order__invoice-number').should('contain', ' Invoice number : ')
    
    })
})