describe("Checking the counter application",()=>{
  it("should be able to visit the application URL",()=>{
      cy.visit("http://localhost:3000")
  })
  it("should have all the compounds",()=>{
      cy.visit('http://localhost:3000');
      cy.get('h3').should('exist')
  })
})