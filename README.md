# ProvaPraticaS206
Repositório contendo a Prova Pratica de S206

## Para rodar os testes de UI, seguir as etapas:

1) Baixar as dependencias do projeto (caso já tenha baixado o código do git)
```
npm install
```
2) Abrir cypress pela linha de comando:
```
./node_modules/.bin/cypress open
```

4) Rodar specs por linha de comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

4)Para gerar um report HTML, siga os 4 passos abaixo:

    1. Adicionando as dependências necessárias para gerar o reporte de testes:
      npm i --save-dev cypress-mochawesome-reporter
	
    2. Modificar o arquivo cypress.config.js:
      const { defineConfig } = require('cypress');
      module.exports = defineConfig({
        reporter: 'cypress-mochawesome-reporter',
        e2e: {
          setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
          },
        },
      });

    3. Adicionar em cypress/support/e2e.js:
      import 'cypress-mochawesome-reporter/register';
    
    5. Rodar specs pela linha de comando:
      ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

## Para rodar os testes de API, seguir as etapas:

Criar estrutura inicial Karate:
```
mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.0.1 \
-DgroupId=aula.inatel \
-DartifactId=aula_inatel
```

Executar um teste a partir do Runner ou suíte:
```
mvn test –Dtest=StarWarsRunner
```

Executar testes separados por tags:
```
mvn test -Dkarate.options="--tags @tag”
```

Para ignorar alguma tag:
```
mvn test -Dkarate.options="--tags ~@tag"
```
