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
let boardNumber = Math.floor(Math.random() * 100);
let boardName = `testing board ${boardNumber}`;
let cardTitle = `this is a testing card ${boardNumber}`;

before(() => {
  // login to trello

  cy.login(URL);

  // Create board using API

  sharedDataUtil.createBoard(boardName).as("boardResponse");
});

//Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });
});

When("user clicked on Add a card button", () => {
  cardAction.clickOnAddACardButton();
});

When("user typed in a title for the card", () => {
  cardAction.typeCardTitle(cardTitle);
});

When("user clicked on add card button", () => {
  cardAction.clickOnAddCardButton();
});

Then("card is created", () => {
  cardAssertion.checkIfCardExists(cardTitle);
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
