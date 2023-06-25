Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: 1 testando o retorno do rattata.
    Given url url_base
    And path '/pokemon/rattata/'
    When method get
    Then status 200
    And match response.name == "rattata"
    And match response.id == 19

Scenario: 2 testando o retorno do pidgeotto.
    Given url url_base
    And path '/pokemon/pidgeotto'
    When method get
    Then status 200
    And match response.name == "pidgeotto"
    And match response.id == 17

Scenario: 3 testando o retorno do weedle.
    Given url url_base
    And path '/pokemon/weedle'
    When method get
    Then status 200
    And match response.name == "weedle"
    And match response.id == 13

Scenario: 4 Teste Negativo - Testando retorno pokemon/ com informações inválidas.
    Given url url_base
    And path '/pokemon/YorkShire/'
    When method get
    Then status 404

Scenario: 5 Testando se retorna status 404 quando tentamos dar um delete.
    Given url url_base
    And path '/pokemon'
    When method delete
    Then status 404

Scenario: 6 Testando se retorna status 404 quando tentamos dar um post.
    Given url url_base
    And path '/pokemon'
    When method post
    Then status 404

Scenario: 7 Testando se retorna status 404 quando tentamos dar um put.
    Given url url_base
    And path '/pokemon'
    When method put
    Then status 404
