export class addadminpage {
  getPageHeader() {
    return cy.get(".oxd-text--h6")
  }

  getAddUserDropdowns() {
    return cy.get(".oxd-select-text--arrow")
  }

  getUserRoleDrpDwnValues() {
    return cy.get(".oxd-select-option")
  }

  getAddUserTxt() {
    return cy.get(".oxd-autocomplete-wrapper input")
  }

  getdropdownList() {
    return cy.get(".oxd-autocomplete-option")
  }

  getaddadminpageList() {
    return cy.get(".oxd-select-text--after i")
  }

  getaddAdminpgalistVal() {
    return cy.get(".oxd-select-option")
  }

  getAddUserDetailsText() {
    return cy.get(".oxd-form-row div div input")
  }

  getAction() {
    return cy.get("[type='submit']")
  }

  getToasterMessage() {
    return cy.get(".oxd-toast-content p")
  }

  //getAddPass
}
