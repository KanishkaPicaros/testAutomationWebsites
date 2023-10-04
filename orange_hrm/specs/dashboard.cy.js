import { loginpage } from "../support/pageobject/loginpage";

const loginpg=new loginpage();

describe("TestCases to validate dashboard functionality",()=>{

    // beforeEach(()=>{
        
    // })
        it("Login to OrangeHRM",()=>{
            //load website base url through command.js
            cy.login() 
        })
    
    
})