///<reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/sharedActions.cy";

const sharedAction = new sharedActions();
const sharedDataUtil = new sharedDataUtils();
const boardName = "New testing board created using API Request";
const updatedListsNames = ["updated first list", "updated second list", "updated third list"];

before(() => {
  cy.login("https://trello.com/login");
  sharedDataUtil.createBoard(boardName).as("boardResponse");
});

// Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

// When user clicked on list name

When("user clicked on list name", () => {
  cy.get('[data-testid="list-name"]').first().click();
});

// And user typed the updated list name

When("user typed the updated list name", () => {
  cy.get('[data-testid="list-name-textarea"]')
    .first()
    .type("new list title" + "{enter}");
});

// Then list name should be updated

Then("list name should be updated", () => {});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
