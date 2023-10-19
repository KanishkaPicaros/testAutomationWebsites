export class dashboardpage {
  getLogoutDorpdown() {
    return cy.get(".oxd-userdropdown-icon")
  }

  getLogoutBtn() {
    return cy.get(".oxd-userdropdown-link").contains("Logout")
  }

  getMenuElements() {
    return cy.get(".oxd-main-menu-item-wrapper")
  }

  getTopMenue() {
    return cy.get(".oxd-topbar-body-nav")
  }

  getfilterSection() {
    return cy.get(".oxd-table-filter")
  }

  getAdminpageButtons() {
    return cy.get(".oxd-button")
  }

  getDashboardItems() {
    return cy.get(".oxd-sheet")
  }

  getDashboardWidgetHeader() {
    return cy.get(".orangehrm-dashboard-widget-name > p")
  }
}
