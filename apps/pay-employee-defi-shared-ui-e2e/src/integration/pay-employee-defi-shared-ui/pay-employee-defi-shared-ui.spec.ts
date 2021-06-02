describe('pay-employee-defi-shared-ui: PayEmployeeDefiSharedUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=payemployeedefisharedui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to pay-employee-defi-shared-ui!');
    });
});
