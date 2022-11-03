describe("Checking the counter application", ()=>{
    it("should be able to visit the application URL",()=>{
        cy.visit("http://example.cypress.io/todo")
    })

    it("should check the structure of the app",()=>{
        cy.visit("http://example.cypress.io/todo")

        cy.get(".new-todo").should("exist")
        cy.get(".todo-count").should("exist")
        cy.get(".filters").should("exist")
    })

    it("should add some todo in the list",()=>{
        cy.visit("http://example.cypress.io/todo")
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("Learn Testing{enter}")
        cy.get(".todo-list").children().should("have.length",3)
    })
    it("should increasse the count of todo after adding it",()=>{
        cy.visit("http://example.cypress.io/todo")
        cy.get(".todo-count strong").should("have.text",2)
        cy.get(".new-todo").type("Learn Testing{enter}")
        cy.get(".todo-count strong").should("have.text",3)
    })
})