class cardActions {
  clickOnAddACardButton() {
    cy.get('[data-testid="list-add-card-button"]').first().click();
    return this;
  }
  typeCardTitle(title) {
    cy.wait(1000);
    cy.get('[data-testid="list-card-composer-textarea"]').clear().type(title);
    return this;
  }
  clickOnAddCardButton() {
    cy.contains("button", "Add card").first().click();
    return this;
  }
  clickOnCard(cardTitle) {
    cy.get('[data-testid="card-name"]').contains(cardTitle).click();
    return this;
  }
  clickOnArchiveButton() {
    cy.get(".js-archive-card").click({ force: true });
    return this;
  }
  clickOnDeleteButtonInSidebar() {
    cy.get(".js-delete-card").click({ force: true });
    return this;
  }
  clickOnDeleteButtonInConfirmationWindow() {
    cy.get('.js-confirm[value="Delete"]').click();
    return this;
  }
  clickOnMakeTemplateButton() {
    cy.get(".js-convert-to-template").click();
    return this;
  }
  closeCardDetailsWindow() {
    cy.get(".js-close-window").click({ force: true });
    return this;
  }
  clickOnCardTitle() {
    cy.get(".js-card-detail-title-input").click();
    return this;
  }

  updateCardTitle(title) {
    cy.get(".js-card-detail-title-input.is-editing").clear({ force: true });
    cy.wait(2000);
    cy.get(".js-card-detail-title-input.is-editing").type(`${title}` + "{enter}");
    return this;
  }

  clickOnMoveButtonInCardDetailsWindow() {
    cy.get(".js-move-card").click({ force: true });
    return this;
  }

  moveCardToList(listName) {
    cy.get(".js-select-list").select(listName);
    return this;
  }

  clickOnMoveButtonInPopUpWindow() {
    cy.get('[data-testid="move-card-popover-move-button"]').click({ force: true });
    return this;
  }

  clickOnHideButton() {
    cy.get(".js-archive-card").click({ force: true });
  }
}

export default cardActions;
