Feature: My first test

Scenario Outline: go to google
    Given i navigate to home page
    When I fill "davidso-consulting" in the bar search
    And I click on the search button
    Then I see the result label
Example:
| 1 |
| 2 |
| 3 |

Scenario: go to google 2
    Given i navigate to home page
    When I fill "fares-millane" in the bar search
    And I click on the search button
    Then I see the result label

