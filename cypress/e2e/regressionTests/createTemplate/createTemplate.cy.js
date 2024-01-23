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
    sharedDataUtil.createCard(data.body.id, cardTitle).as("cardResponse");
  });
});

// Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });

  // When user clicked on the card he wants to use as a template card

  When("user clicked on the card he wants to use as a template card", () => {
    cardAction.clickOnCard(cardTitle);
  });

  // And user clicked on Make Template button

  When("user clicked on Make Template button", () => {
    cardAction.clickOnMakeTemplateButton();
  });

  // And user closed card details window

  When("user closed card details window", () => {
    cardAction.closeCardDetailsWindow();
  });

  // Then template badge is visible on the card in the list

  Then("template badge is visible on the card in the list", () => {
    cardAssertion.checkIfTemplateBadgeExists();
  });
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
