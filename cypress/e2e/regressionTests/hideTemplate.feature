Feature: Verify hide template functionality

    Scenario: Check if the user can hide template successfully
        Given user navigated to board page
        When user clicked on template
        And user clicked on hide button in the card details window
        And user clicked on close card details button
        Then template has been hidden successfully