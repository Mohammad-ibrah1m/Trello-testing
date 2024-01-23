Feature: Check list functionality
    Scenario: Verify that user can create a new list
        Given user navigated to board page
        When user clicked on Add another list button
        And user entered the list title
        And user clicked on Add list button
        Then list is created