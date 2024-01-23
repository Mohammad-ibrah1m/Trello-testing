Feature: Verify move template functionality

    Scenario: Check if the user can move template to another list successfully
        Given user navigated to board page
        When user clicked on template
        And user clicked on Move button in the card details window
        And user selected where he wants to move the template
        And user clicked on Move button in the popup window
        And user clicked on close card details button
        Then template is moved successfully