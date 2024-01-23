class listAssertions {
  checkIfListExists(listTitle) {
    cy.get('[data-testid="list-name"]').last().should("contain", listTitle);
    return this;
  }
}
export default listAssertions;
