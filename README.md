# twitter-clone
A project that is *almost* 1:1 Twitter copy

### Requirements

1. Backend
* java 17, Spring Boot, REST, Swagger
* testing: JUnit, Mockito
* DB: H2 on local, Postgres on dev (dockerized)
* liquibase for schema on db migrations
* dockerfile
* (OKTA) auth with Spring Security (JWT Bearer)
* facade pattern / CQRS
* mapstruct for dao/dto mapping
* wyszukiwanie: criteria/elastic/lucene
* logback do logowania

2. Frontend
* React, typescript, Next.js
* testing: JEST, RTL, Cypress
* dockerfile
* formatting: Husky, prettier, ESlint
* styled components, Material UI, ??Tailwind??
* fetch for http client

3. Others
* api-first approach
* docker compose for the project
* 3 pipelines:
    * frontend
        * npm i && npm build // refresh cache
        * run test && code coverage 70%
        * checkstyle
    * backend
        * mvn build
        * run test && code coverage 70% 
        * checkstyle 
    * project
        * docker compose && cypress integration tests && deploy // do przemyslenia
* deployment slot: Heroku
* monorepo
* IAAC / Terraform and K8S
