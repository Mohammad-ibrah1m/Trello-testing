Feature: Create a new card functionality

    Feature Description

    Scenario: Verify Create a new card functionality
        Given user navigated to board page
        When user clicked on Add a card button
        And user typed in a title for the card
        And user clicked on add card button
        Then card is created
