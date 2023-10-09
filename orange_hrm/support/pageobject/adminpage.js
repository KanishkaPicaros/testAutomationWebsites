export class AdminPage{
    getAdminpageButtons(){
        return cy.get('.oxd-button')
    }

    getTopMenueItems(){
        return cy.get('.oxd-topbar-body-nav-tab-item')
    }
    getMenuElements(){
        return cy.get('.oxd-main-menu-item-wrapper')
    }

    getTableColumnNames(){
        return cy.get('.oxd-table-header')
    }

    getAdminPageDorpdown(){
        return cy.get('.oxd-select-text')
    }

    getUserRoleDrpDwnValues(){
        return cy.get('.oxd-select-option')
    }


    getSyetemUserName(){
        return cy.get('.oxd-input-field-bottom-space>div>input')
    }

    getUnchangedAdminCheckbox(){
        return cy.get('.oxd-table-row--with-border')
    }
    

    
}