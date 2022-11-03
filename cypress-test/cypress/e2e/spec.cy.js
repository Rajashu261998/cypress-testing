///<reference types="Cypress"/>

describe("Checking the counter application",()=>{
  it("should be able to visit the application URL",()=>{
      cy.visit("http://localhost:3000")
  })
  it("should have all the compounds",()=>{
      cy.visit('http://localhost:3000');
      cy.get('h3').should('exist')
      cy.get(".increment_count").should("exist")
      cy.get(".decrement_count").should("exist")
  })

  it("should be able to increment the count ",()=>{
      cy.visit('http://localhost:3000');
      cy.get("h3").should("have.text","The Current Count is 0")
      cy.get(".increment_count").click()
      cy.get("h3").should("have.text", "The Current Count is 1")
  })
  it("should be able to increment and decrement the count ",()=>{
    cy.visit('http://localhost:3000');
    cy.get("h3").should("have.text","The Current Count is 0")
    cy.get(".increment_count").click()
    cy.get(".increment_count").click()
    cy.get(".increment_count").click()
    cy.get(".decrement_count").click()
    cy.get("h3").should("have.text", "The Current Count is 2")
})

it("should have a label of add for the increment button",()=>{
  cy.visit('http://localhost:3000');
  cy.get(".increment_count").should("have.text","Add")

})
  
})