# InterfacePatientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Docker 
## Prérequis: avoir installer docker sur votre machine
## Suivre toutes les étapes suivantes pour publier une nouvelle mise à jour
## Creer l'image docker 
docker build -t interface-patient .

## Tester l'image:
docker run -p 8080:8080 interface-patient
### pour tester se connecter sur localhost:8080

## Donner un nom à l'image:
docker tag interface-patient ionisstm/interface-patient:latest

## Se connecter à docker hub
docker login

## Publier l'image sur docker hub
docker push ionisstm/interface-patient:latest

