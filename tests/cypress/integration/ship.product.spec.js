describe('Shiping new product ', () => {
    it('Frenchie Store', () => {
      cy.visit('/')

      cy.get(':nth-child(1) > .mfProducts-MuiPaper-root > .mfProducts-MuiCardHeader-root > .mfProducts-MuiCardHeader-action > .mfProducts-MuiButtonBase-root > .mfProducts-MuiIconButton-label > .mfProducts-MuiSvgIcon-root > path')
            .click();

      cy.get('.frenchieStoreHost-MuiBadge-root > .frenchieStoreHost-MuiSvgIcon-root')
            .click();

     
      cy.get('.mfCart-MuiTableBody-root > .mfCart-MuiTableRow-root > :nth-child(1)')
           .contains('Blue Shirt');


      cy.get('.mfCart-MuiTableBody-root > .mfCart-MuiTableRow-root > :nth-child(2)')
           .contains('$25.99');

      cy.screenshot();
    })
  })