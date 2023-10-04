// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { loginpage } from "./pageobject/loginpage"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const encryptor= require("simple-encryptor")(Cypress.env("infor"))


const loginpg=new loginpage 
Cypress.Commands.add('login',()=>{
    cy.visit("/")
    cy.get('.orangehrm-login-container').should('be.visible')
    loginpg.getUserNameLbl().should('have.text',"Username")
    loginpg.getPasswordLbl().last().should('have.text',"Password")

    
    loginpg.setUserNameInput().type(Cypress.env("userName"),{log:false})
    loginpg.setPasswordInput().type(encryptor.decrypt(Cypress.env("password")),{log:false})
    loginpg.submitBtn().click();
    
})