
class Authentication{
    
    get inputEmail(){
        return ('#1-email');
    }

    get inputPassword(){
        return ('#1-password');
    }

    get btnSubmit(){
        return ('#1-submit');
    }

    submit(email, password){
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputPassword).type(password);
        cy.get(this.btnSubmit).click();
    }
}

export default new Authentication()