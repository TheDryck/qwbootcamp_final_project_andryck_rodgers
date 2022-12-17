import Contact from '../pageobjects/contact.page'
import data from '../data/contact.data'

describe('Validating contact page', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        cy.get('#top-contact').click()
    })

    for(const d of data){
        it(`Should send message as a ${d.user} user`, ()=>{
            Contact.submit(d.firstname, d.lastname, d.email, d.subject, d.message);

            if(d.user === 'invalid'){
                cy.get('div.chakra-form__error-message.css-170ki1a').should('be.visible');
                cy.get('div.chakra-form__error-message.css-170ki1a').should('have.text', 'Email is invalid')
            }
            if(d.user === 'no_email'){
                cy.get('div.chakra-form__error-message.css-170ki1a').should('be.visible');
                cy.get('div.chakra-form__error-message.css-170ki1a').should('have.text', 'Field is required!')
            }if(d.user === 'valid'){
                cy.get('#toast-1').should('be.visible')
            }
        })
    }
    
})