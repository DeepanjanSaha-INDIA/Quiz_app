# QuizApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Setup

This projects includes MongoDb to store data, Angular for UI and Express for routing and Node.js for server middleware. To setup mongo database on local, you need MongoDb. The database is attached in the location `src/assets/dataset_combined.json`. We need to load the dataset in MongoDb in `quizApp` database and `questionaire` collection. It can be done using command prompt command `mongoimport dataset_combined.json -d quizApp -c questionaire --jsonArray`. Also **Schema** of the collection is included in `src/assests/db_schemas.json`.

Also we need to run the server which will connect with the MongoDb, the file for the server is `server_main.js` located in `server` folder. To start the server we use the command `node server_main.js` or `nodemon server_main.js`. And to start the Angular project, it is the usual command `ng serve`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
