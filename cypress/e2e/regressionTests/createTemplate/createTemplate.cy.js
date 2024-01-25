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

  /* cy.get("@listResponse").then((data) => {
    sharedDataUtil.createCard(data.body.id, cardTitle).as("cardResponse");
  }); */
});

// Given user navigated to board page

Given("user navigated to board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedAction.openBoard(data.body.url);
  });

  // When user clicked on create from template icon

  When("user clicked on create from template icon", () => {
    cardAction.clickOnCreateFromTemplateIcon();
  });

  // And user clicked on create new template button

  When("user clicked on create new template button", () => {
    cy.wait(1000);
    cardAction.clickOnCreateNewTemplateCardButton();
  });

  // And user entered template title

  When("user entered template title", () => {
    cardAction.enterTemplateCardTitle(cardTitle);
  });

  // Then template badge is visible on the card in the list

  Then("template badge is visible on the card in the list", () => {
    cardAssertion.checkIfTemplateBadgeExists();
  });

  // template banner exists on the template card details window

  Then("template banner is visible on the template card details window", () => {
    cardAssertion.checkIfTemplateBannerIsVisibleInCardDetailsWindow();
  });
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtil.deleteBoard(data.body.id);
  });
});
