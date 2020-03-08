/// <reference types="cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('test', () => {
      cy.get(".spinner").should("be.visible");
    })
  

  })
  