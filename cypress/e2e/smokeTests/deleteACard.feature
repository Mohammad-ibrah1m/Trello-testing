@R_2 @smoke
Feature: Checking delete a card functionality

    Scenario: Verify that user can delete a card
        Given user navigated to board page
        When user clicked on the card he wants to delete
        And user clicked on Archive button in the sidebar
        And user clicked on Delete button in the sidebar
        And user clicked on Delete button in confirmation pop up window
        Then card is deleted