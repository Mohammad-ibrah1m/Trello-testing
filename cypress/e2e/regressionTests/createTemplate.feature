Feature: Verify create a card template functionality

    Verify that user can create a card template
    Scenario: Verify that user can create a card template
        Given user navigated to board page
        When user clicked on the card he wants to use as a template card
        And user clicked on Make Template button
        And user closed card details window
        Then template badge is visible on the card in the list