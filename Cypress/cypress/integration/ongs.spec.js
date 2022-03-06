/// <reference types="cypress" />

describe('Ongs', () => {
    it('Deve poder realizar um cadastro', () => {
        cy.visit( 'http://localhost:3000/register');
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('Dogs@gmail.com');
        cy.get('[data-cy=whatsapp]').type('51999999999');
        cy.get('[data-cy=city]').type('Porto Alegre');
        cy.get('[data-cy=uf]').type('RS');
        cy.get('[data-cy=submit]').click();
    });
    it('Deve poder realizar um login no sistema', () => {
        
    });
})