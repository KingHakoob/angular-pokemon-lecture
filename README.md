# AngularPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




0. Installs
    Angular CLI command => npm install -g @angular/cli
    Extension: Angular Language Service by angular.io


1. Create the project & File structure
    app.component.css => the stylesheet for our component, we put css in this file
    app.component.html => the template for our component, we put html in this file
    app.component.spec.ts => the unit test file
    app.component.ts => the class for our component, we put typescript in this file


2. Displaying data
    Data binding - This allows us to use data from our class file inside of our template
        Interpolation binding {{}} => This allows us to display the value of properties inside the template


3. Components
    ng generate component ./components/pokemon

4. Routing
    Angular has routing set up by default
    You set your routes inside of the routes array in the app.routes.ts file
        { 
            path: 'This is where you set the url route you want', 
            component: This is where you put the component you want to load, when at that url route 
        },

5. Services & Fetching
6. Interfaces


7. Passing data - Parent to child & Display fetched data
8. Pipes 
9. User input