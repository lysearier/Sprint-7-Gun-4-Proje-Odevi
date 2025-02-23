import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="ad-input"]').type('er')
      //Assert
      cy.contains(errorMessages.ad);
    });

    it('surname input throws error for 2 chars', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="soyad-input"]').type('gn')
      //Assert
      cy.contains(errorMessages.soyad);
    });

    it('email input throws error for emre@wit.', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="email-input"]').type('eren@wit.')
      //Assert
      cy.contains(errorMessages.email);
    });

    it('password input throws error for 1234', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="password-input"]').type('1234')
      //Assert
      cy.contains(errorMessages.password);
    });

    it('button is disabled for unvalidated inputs', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="password-input"]').type('1234')
      //Assert
      cy.get('[data-cy ="submit-button"]').should("be.disabled");
    });
  });
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="ad-input"]').type('eren')
      cy.get('[data-cy ="soyad-input"]').type('gndz')
      cy.get('[data-cy ="email-input"]').type('eren@wit.com.tr')
      cy.get('[data-cy ="password-input"]').type('1234Aa**')
      //Assert
      cy.get('[data-cy ="submit-button"]').should("not.be.disabled");
    });
    it('submits form on valdated inputs', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy ="ad-input"]').type('eren')
      cy.get('[data-cy ="soyad-input"]').type('gndz')
      cy.get('[data-cy ="email-input"]').type('eren@wit.com.tr')
      cy.get('[data-cy ="password-input"]').type('1234Aa**')
      cy.get('[data-cy ="submit-button"]').click();
      //Assert
      cy.get('[data-cy ="response-message"]').should('be.visible');
    });
  });

});