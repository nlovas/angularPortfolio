# Portfolio
My portfolio website using... Angular Universal!

This is my first time using Universal.

Universal setup was tricky, so for my own future reference:  
- Used this official guide to getting started (https://angular.io/guide/universal) BUT following it from the start didn't work, so instead have a basic app ready and start at (https://angular.io/guide/universal#universal-tutorial). Use that command to generate what you need to get things working (However, it did not generate all of those files...hence why I needed a basic app starting point. I just removed all of the files mentioned and added them back in if they were not generated) Then I used their command `npm run build:ssr && npm run serve:ssr` to ensure it would build correctly.
- To do a development build, use ng serve like always!

----------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

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
