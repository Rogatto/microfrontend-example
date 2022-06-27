describe('Shiping new product and remove from the ship ', () => {
    it('Frenchie Store', () => {
      cy.visit('/')

      cy.get(':nth-child(1) > .mfProducts-MuiPaper-root > .mfProducts-MuiCardHeader-root > .mfProducts-MuiCardHeader-action > .mfProducts-MuiButtonBase-root > .mfProducts-MuiIconButton-label > .mfProducts-MuiSvgIcon-root > path')
            .click();

      cy.get('.frenchieStoreHost-MuiBadge-root > .frenchieStoreHost-MuiSvgIcon-root')
            .click();

      cy.get(':nth-child(4) > .mfCart-MuiButtonBase-root > .mfCart-MuiIconButton-label > .mfCart-MuiSvgIcon-root')
            .click();

      cy.get('.mfCart-MuiAlert-message')
            .contains('Successfully deleted product from cart!');
      
      cy.screenshot();
      
    })
  })