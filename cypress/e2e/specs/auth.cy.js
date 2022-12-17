
import Auth from '../pageobjects/auth.page'
import faker from '@faker-js/faker';
import data from '../data/login.data'

describe('Authentication', ()=>{
    beforeEach(()=>{
        cy.visit('https://ui-automation-camp.vercel.app/');
        cy.get('#signInOrRegister').click();
    })

    it.skip('New user signup with valid email and password', ()=>{
        /* const fullName = faker.name.fullName();
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1]; */
        //const email = faker.internet.email(firstName,lastName,'gmail.com');
        //const email =  faker.internet.email();
        //const password = faker.internet.password();

        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {
            const email = 'example66@gmail.com' //faker.internet.email();
            const password = 'Dryck$t3r'

            cy.get('ul.auth0-lock-tabs > li > a').click();
            //Auth.submit(email, password);
            cy.get('#1-email').type(email);
            cy.get('#1-password').type(password);
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        cy.get('h2.chakra-heading').should('be.visible');
        cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        
    })

    it.skip('User signup with used email', ()=>{
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {
            const email = 'eexample35@gmail.com' //faker.internet.email();
            const password = 'Dryck$t3r'

            cy.get('ul.auth0-lock-tabs > li > a').click();
            //Auth.submit(email, password); 
            /*cy.origin() does not allow the use of imports or variables not defined inside the 
            function (imports cannot be done inside origin()) */
            cy.get('#1-email').type(email);
            cy.get('#1-password').type(password);
            cy.get('#1-submit').click();

            cy.get('div.auth0-global-message').should('exist');
        })

        //cy.get('div.auth0-global-message').should('exist');
    })

    it.skip('User signup with blank input fields', ()=>{
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('ul.auth0-lock-tabs > li > a').click();
            cy.get('#1-submit').click();

            cy.get('#auth0-lock-error-msg-email > div.auth0-lock-error-invalid-hint').should('have.text', 'Email can\'t be blank');
            cy.get('#auth0-lock-error-msg-password > div.auth0-lock-error-invalid-hint').should('have.text', 'Password can\'t be blank');
        })

        //cy.get('div.auth0-global-message').should('exist');
    })

    //Login tests had to be written sequentially and without data file variables due to the use of cy.origin()
    /* for(const d of data){
        it(`Log in with ${d.user} user`, ()=>{
            cy.visit('https://ui-automation-camp.vercel.app/');
            cy.get('#signInOrRegister').click();    
            
            cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {
                cy.get('#1-email').type(d.email);
                cy.get('#1-password').type(d.password);
                cy.get('#1-submit').click();

                if(d.user === "blank"){
                    cy.get('#auth0-lock-error-msg-email > div.auth0-lock-error-invalid-hint').should('have.text', d.message);
                }
                if(d.user === "invalid"){
                    cy.get('#auth0-lock-error-msg-email > div.auth0-lock-error-invalid-hint').should('have.text', d.message);
                }
                else{
                    cy.url().should('contain', d.expectedUrl)
                }
            })

        })
    } */
    it('Login with valid user', ()=>{
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('janetmrodgers@gmail.com');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            //cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
        })

        cy.get('h2.chakra-heading').should('be.visible');
        cy.url().should('contain', 'https://ui-automation-camp.vercel.app/products');
    })

    it('Login attempt with blank email field', ()=>{
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            cy.get('#auth0-lock-error-msg-email > div.auth0-lock-error-invalid-hint').should('have.text', 'Email can\'t be blank');
        })
    })

    it('Login attempt with invalid email', ()=>{
        cy.origin('https://dev-mlluudmotpwoldtv.us.auth0.com', {args: {}}, ({}) => {

            cy.get('#1-email').type('rodgersdryck');
            cy.get('#1-password').type('Dryck$t3r');
            cy.get('#1-submit').click();

            cy.get('#auth0-lock-error-msg-email > div.auth0-lock-error-invalid-hint').should('have.text', 'Email is invalid');
        })
    })
})