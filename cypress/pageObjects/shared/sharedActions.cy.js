class sharedActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }
}

export default sharedActions;
