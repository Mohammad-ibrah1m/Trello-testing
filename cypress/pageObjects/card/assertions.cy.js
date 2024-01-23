class cardAssertions {
  checkIfCardExists(title) {
    cy.get('[data-testid="trello-card"]').should("contain", title);
    return this;
  }

  checkIfCardHasBeenDeleted(title) {
    cy.get('[data-testid="list-wrapper"]').first().should("not.contain", title);
    return this;
  }

  checkIfTemplateBadgeExists() {
    cy.get('[data-testid="badge-card-template"]')
      .should("exist")
      .and("contain", "This card is a template.");
    return this;
  }

  checkIfCardWasMoved(cardTitle, listName) {
    cy.contains('[data-testid="list"]', listName).children().contains(cardTitle);
    return this;
  }
  checkIfTemplateIsHidden(cardTitle, listName) {
    cy.contains('[data-testid="list"]', listName).children().should("not.contain", cardTitle);
    return this;
  }
}

export default cardAssertions;
