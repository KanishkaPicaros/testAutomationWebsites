import { AdminPage } from "../support/pageobject/adminpage"
const adminPg=new AdminPage()
describe('Test admin page functionalities and items',()=>{
    beforeEach(()=>{
        //load website base url through command.js
        cy.login() 
        cy.fixture("/testData.json").as('adminData')
     })

     
     
    it('Verify user is getting navigated into admin page',()=>{
        navigateToAdmin()
        adminPg.getAdminpageButtons().eq(1).should('have.text',' Search ') 
        adminPg.getAdminpageButtons().eq(2).should('have.text',' Add ') 
    })

    it("Verify top menu items of admin page",()=>{
        navigateToAdmin()
        adminPg.getTopMenueItems().should('have.length',7)
        adminPg.getTopMenueItems().then(($elements)=>{
            expect($elements.text())
            .include('User Management')
            .include('Job')
            .include('Organization')
            .include('Qualifications')
            // .include('Nationalities')
            // .include('Corporate Branding')
            // .include('Configuration')
        })
    })

    it("Verify table columns",()=>{
        navigateToAdmin()
        adminPg.getTableColumnNames().find('.oxd-table-th').then(($colNames)=>{
            expect($colNames.text())
            .include('Username')
            .and.include('User Role')
            .and.include('Employee Name')
            .and.include('Status')
            .and.include('Actions')
        })

    })

    it.only("FIlter admin user and get admin",()=>{
        cy.get('@adminData').then((adminpage)=>{
            navigateToAdmin()
            adminPg.getAdminPageDorpdown().find('.oxd-select-text--after i').first().click()
            adminPg.getUserRoleDrpDwnValues().contains("Admin").click()
            adminPg.getAdminPageDorpdown().find('.oxd-select-text-input').first().should('have.text',adminpage.searchUserName)
            adminPg.getSyetemUserName().type(adminpage.searchUserName)
            adminPg.getAdminpageButtons().contains('Search').click(),{force:true}
            adminPg.getUnchangedAdminCheckbox().find('.oxd-table-card-cell-hidden').should('be.hidden')
        })
        

    })

})
function navigateToAdmin(){
    adminPg.getMenuElements().contains('Admin').click({force:true});
    
}