class listActions {
  clickOnAddAnotherListButton() {
    cy.get('[data-testid="list-composer-button"]').click();
    return this;
  }

  enterListTitleInInputField(listTitle) {
    cy.get('[data-testid="list-name-textarea"]').last().type(listTitle);
    return this;
  }

  clickOnAddListButton() {
    cy.get('[data-testid="list-composer-add-list-button"]').click();
    return this;
  }
}

export default listActions;
