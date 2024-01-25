@R_4 @regression
Feature: Verify template name update functionality

    Scenario: Check if the user can update template name successfully
        Given user navigated to board page
        When user clicked on template
        And user clicked on template title in the card details window
        And user typed the new name in the title input
        And user closed card details window
        Then template name is updated successfully