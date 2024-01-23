///<reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import listActions from "../../../pageObjects/list/actions.cy";
import listAssertions from "../../../pageObjects/list/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/sharedActions.cy";

const sharedAction = new sharedActions();
const sharedDataUtil = new sharedDataUtils();
const listAction = new listActions();
const listAssertion = new listAssertions();

const boardName = "New testing board created using API Request";
const listTitle = "New testing list created using UI";

before(() => {
  cy.login("https://trello.com/login");

  sharedDataUtil.createBoard(boardName).as("boardResponse");
});

// Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
  cy.wait(4000);
  cy.screenshot({ capture: "fullPage" });
});

// When user clicked on Add another list button

When("user clicked on Add another list button", () => {
  listAction.clickOnAddAnotherListButton();
});

// And user entered the list title

When("user entered the list title", () => {
  listAction.enterListTitleInInputField(listTitle);
});

// And user clicked on Add list button

When("user clicked on Add list button", () => {
  listAction.clickOnAddListButton();
});

// Then list is created

Then("list is created", () => {
  listAssertion.checkIfListExists(listTitle);
});

after(() => {
  cy.wait(2000);
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
