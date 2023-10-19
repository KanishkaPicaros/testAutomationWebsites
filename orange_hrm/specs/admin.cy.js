//import { error } from "cypress/types/jquery"
import { addadminpage } from "../support/pageobject/addadminpage"
import { AdminPage } from "../support/pageobject/adminpage"
import { adminEditPage } from "../support/pageobject/adminEditPage"
const adminPg = new AdminPage()
const addAdminPg = new addadminpage()
const adminEditPg = new adminEditPage()
const encryptor = require("simple-encryptor")(Cypress.env("infor"))

describe("Test admin page functionalities and items", () => {
  beforeEach(() => {
    //load website base url through command.js
    cy.login()
    cy.fixture("/testData.json").as("adminData")
  })

  it("Verify user is getting navigated into admin page", () => {
    navigateToAdmin()
    adminPg.getAdminpageButtons().eq(1).should("have.text", " Search ")
    adminPg.getAdminpageButtons().eq(2).should("have.text", " Add ")
  })

  it("Verify top menu items of admin page", () => {
    navigateToAdmin()
    adminPg.getTopMenueItems().should("have.length", 7)
    adminPg.getTopMenueItems().then($elements => {
      expect($elements.text())
        .include("User Management")
        .include("Job")
        .include("Organization")
        .include("Qualifications")
      // .include('Nationalities')
      // .include('Corporate Branding')
      // .include('Configuration')
    })
  })

  it("Verify table columns", () => {
    navigateToAdmin()
    adminPg
      .getTableColumnNames()
      .find(".oxd-table-th")
      .then($colNames => {
        expect($colNames.text())
          .include("Username")
          .and.include("User Role")
          .and.include("Employee Name")
          .and.include("Status")
          .and.include("Actions")
      })
  })

  it("Filter admin user and get admin name", () => {
    cy.get("@adminData").then(adminpage => {
      navigateToAdmin()
      adminPg.getAdminPageDorpdown().find(".oxd-select-text--after i").first().click()
      adminPg.getUserRoleDrpDwnValues().contains("Admin").click()
      adminPg
        .getAdminPageDorpdown()
        .find(".oxd-select-text-input")
        .first()
        .should("have.text", adminpage.searchUserName)
      adminPg.getSyetemUserName().type(adminpage.searchUserName)
      adminPg.getAdminpageButtons().contains("Search").click(), { force: true }
      adminPg.getUnchangedAdminCheckbox().find(".oxd-table-card-cell-hidden").should("be.hidden")

      //read write from fixture
      adminPg
        .getEmpNameFromCell()
        .eq(3)
        .invoke("text")
        .as("EmployeeName")
        .then(empData => {
          const ename = empData.split(" ")[0]
          cy.readFile("orange_hrm/fixtures/testData.json", error => {
            if (error) {
              return cy.log(error)
            }
          }).then(file => {
            file.empName = ename
            cy.writeFile("orange_hrm/fixtures/testData.json", JSON.stringify(file))
          })
        })
    })
  })

  it("Pre-requisites to save emp name", () => {
    navigateToAdmin()
    adminPg.getUnchangedAdminCheckbox().find()
  })

  it("Add new system user", () => {
    navigateToAdmin()
    cy.intercept("GET", "/web/index.php/api/**/pim/employees?**").as("pause1")
    adminPg.getAdminpageButtons().eq(2).should("have.text", " Add ").click({ force: true })
    addAdminPg.getPageHeader().last().should("have.text", "Add User")
    addAdminPg.getAddUserDropdowns().first().click()
    addAdminPg.getUserRoleDrpDwnValues().contains("Admin").click()
    adminPg
      .getAdminPageDorpdown()
      .find(".oxd-select-text-input")
      .first()
      .should("have.text", "Admin")

    addAdminPg.getAddUserTxt().should("have.attr", "placeholder", "Type for hints...").type("test") //adminpage.empName
    cy.wait("@pause1")

    addAdminPg.getdropdownList().should("be.visible").first().click()
    addAdminPg.getaddadminpageList().last().click()
    addAdminPg.getaddAdminpgalistVal().should("be.visible").eq(1).click()
    addAdminPg.getAddUserDetailsText().eq(1).type("Maylie1")
    addAdminPg
      .getAddUserDetailsText()
      .eq(2)
      .type(encryptor.decrypt(Cypress.env("password")))
    addAdminPg
      .getAddUserDetailsText()
      .eq(3)
      .type(encryptor.decrypt(Cypress.env("password")))

    addAdminPg.getAction().should("have.text", " Save ").click()
    addAdminPg.gettoasterMessage().contains("Success")
  })

  it("Edit added employee", () => {
    cy.intercept("GET", "/web/index.php/api/**/admin/users?**").as("filterResults")
    navigateToAdmin()
    adminPg.getSyetemUserName().type("Maylie")
    adminPg.getAdminpageButtons().eq(1).click({ force: true })
    adminPg.getFilterResults().should("be.visible")
    adminPg.getUnchangedAdminCheckbox().find(".oxd-table-card-cell-hidden").click()
    adminPg.getAdminModifyButtons().last().click()
    cy.wait("@filterResults")
    adminEditPg.getPageHeader().contains("Edit User")
  })
})
function navigateToAdmin() {
  adminPg.getMenuElements().contains("Admin").click({ force: true })
}
