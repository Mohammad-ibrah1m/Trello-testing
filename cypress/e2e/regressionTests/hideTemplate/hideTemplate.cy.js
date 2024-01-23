///<reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import sharedActions from "../../../pageObjects/shared/sharedActions.cy";
import cardActions from "../../../pageObjects/card/actions.cy";
import cardAssertions from "../../../pageObjects/card/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new sharedActions();
const cardAction = new cardActions();
const cardAssertion = new cardAssertions();

const URL = "https://trello.com/login";
const boardNumber = Math.floor(Math.random() * 100);
const boardName = `testing board ${boardNumber}`;
const listName = `New testing list created using API`;
const cardTitle = `this is a testing card ${boardNumber}`;

before(() => {
  // login to trello

  cy.login(URL);

  // Create board using API

  sharedDataUtil.createBoard(boardName).as("boardResponse");
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.createList(data.body.id, listName).as("listResponse");
  });

  cy.get("@listResponse").then((data) => {
    sharedDataUtil.createCard(data.body.id, cardTitle, true).as("cardResponse");
  });
});

// Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

// When user clicked on template

When("user clicked on template", () => {
  cardAction.clickOnCard(cardTitle);
});

// And user clicked on hide button in the card details window

When("user clicked on hide button in the card details window", () => {
  cardAction.clickOnHideButton();
});

// And user clicked on close card details button

When("user clicked on close card details button", () => {
  cardAction.closeCardDetailsWindow();
});

// Then template has been hidden successfully
Then("template has been hidden successfully", () => {
  cy.wait(2000);
  cardAssertion.checkIfTemplateIsHidden(cardTitle, listName);
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
