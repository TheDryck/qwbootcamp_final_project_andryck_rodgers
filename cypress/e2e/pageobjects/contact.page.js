
class Contact{
    get inputFName(){
        return ('#firstName')
    }

    get inputLName(){
        return ('#lastName')
    }

    get inputEmail(){
        return ('#email')
    }

    get inputSubject(){
        return ('#subject')
    }

    get inputMssg(){
        return ('#message')
    }

    get sndMssg(){
        return ('.css-1pdqelo > .chakra-button')
    }

    submit(fname, lname, email, subject, mssg){
        cy.get(this.inputFName).type(fname);
        cy.get(this.inputLName).type(lname);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(subject);
        cy.get(this.inputMssg).type(mssg);
        cy.get(this.sndMssg).click();
    }
}

export default new Contact()