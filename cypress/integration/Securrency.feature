Feature: DApp Testing

  Background:
    Given I open dapp
    And I click on connect



  Scenario: Verifying the logo
    Then I verify the logo


    Scenario: Verifying the columns of citizen list
    Then I should see Id
    Then I should see name
    Then I should see age
    Then I should see city


  Scenario: Opening a dapp
    Given I open dapp
    And I click add citizen button
    Given I enter name
    Given I enter age
    Given I enter city
    Given I add somenotes
    And I click on AddCitizen
