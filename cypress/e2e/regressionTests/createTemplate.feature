@R_3 @regression
Feature: Verify create a card template functionality

    Verify that user can create a card template
    Scenario: Verify that user can create a card template
        Given user navigated to board page
        When user clicked on create from template icon
        And user clicked on create new template button
        And user entered template title
        Then template badge is visible on the card in the list
        And template banner is visible on the template card details window