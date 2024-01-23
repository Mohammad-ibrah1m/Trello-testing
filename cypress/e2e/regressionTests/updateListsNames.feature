Feature: Verify that user can update list name

    check list name update functionality
    Scenario: check that user can update list name
        Given user navigated to board page
        When user clicked on list name
        And user typed the updated list name
        Then list name should be updated
# Examples:
#     | listIndex | listName |
#     | 0         | one      |
#     | 1         | two      |
#     | 2         | three    |