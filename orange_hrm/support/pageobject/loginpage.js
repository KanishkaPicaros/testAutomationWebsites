export class loginpage{
    getLoginContainerUI(){

    }


    getUserNameLbl(){
        return cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label');
    }
    setUserNameInput(){
        return cy.get("[name='username']")
    }
    
    setPasswordInput(){
        return cy.get("[name='password']")
    }

    getPasswordLbl(){
        return cy.get(".oxd-label");
    }

    submitBtn(){
        return cy.get("[type='submit']")
    }


}