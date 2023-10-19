import { dashboardpage } from "../support/pageobject/dashboardpage"

const dashboardpg = new dashboardpage()
describe("TestCases to validate dashboard functionality", () => {
  beforeEach(() => {
    //load website base url through command.js
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })
  it("Login to OrangeHRM", () => {
    dashboardpg.getDashboardItems().should("have.length", 7)

    //explicit  assertion
    dashboardpg.getDashboardWidgetHeader().then($element => {
      expect($element.text())
        .include("Time at Work")
        .and.include("My Actions")
        .and.include("Quick Launch")
        .and.include("Buzz Latest Posts")
        .and.include("Employees on Leave Today")
        .and.include("Employee Distribution by Sub Unit")
        .and.include("Employee Distribution by Location")
    })

    NavigateToAdmin()
    dashboardpg.getTopMenue().should("be.visible")
    //dashboardpg.getTopMenueItems().should('have.length',7)
    // dashboardpg.getAdminpageButtons().eq(1).should('have.text',' Search ')
    // dashboardpg.getAdminpageButtons().eq(2).should('have.text',' Add ')
  })
})
function NavigateToAdmin() {
  dashboardpg.getMenuElements().contains("Admin").click({ force: true })
  dashboardpg.getMenuElements().contains("Admin").should("have.class", "oxd-main-menu-item active")
}
