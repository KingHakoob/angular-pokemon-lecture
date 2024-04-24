0. Installs
    Angular CLI command => npm install -g @angular/cli
    Extension: Angular Language Service by angular.io


1. Create the project & File structure
    ng new project-name

    app.component.css => the stylesheet for our component, we put css in this file
    app.component.html => the template for our component, we put html in this file
    app.component.spec.ts => the unit test file
    app.component.ts => the class for our component, we put typescript in this file


2. Displaying data
    Data binding - This allows us to use data from our class file inside of our template
        Interpolation binding {{}} => This allows us to display the value of properties inside the template


3. Components
    ng generate component ./components/component-name

4. Routing
    Angular has routing set up by default
    You set your routes inside of the routes array in the app.routes.ts file
        { 
            path: 'This is where you set the url route you want', 
            component: This is where you put the component you want to load, when at that url route 
        },

5. Services & Fetching
    ng generate service ./service/service.name

6. Interfaces
    ng generate interface ./interfaces/interface-name

7. Passing data - Parent to child & Display fetched data


8. Pipes 
    Pipes are functions in angular that help with formatting displayed data
    There are default pipes for upper casing and lower casing text, dates, currency, decimals and percentages
    
    You can also create custom pipes. Let's say you wanted to remove spaces and replace them with dashes -,
    you can do that


9. User input
10. Two-way binding


### Data binding
Data binding is a way to connect properties from your class file, to your template file

+ Interpolation binding => {{ }}
    To insert properties into a string or inside of an HTML tag
    Example: <p>{{ property-name }}</p>
    Link: https://angular.dev/guide/templates/interpolation

+ Property binding => []
    To insert properties as values of properties, or attributes on an html tag
    Example: <img [src]='property-name' alt='do not forget me' />

    Can also be used to pass data from a parent component to a child component
    Example: <component-selector-name [property-from-child]='property-from-parent'></component-selector-name>
    Link: https://angular.dev/guide/templates/property-binding

+ Event binding => ()
    Allows you to react to user interaction events like click
    Example: <button (event-name)='function-name()'>Click me!</button>
    Link: https://angular.dev/guide/templates/event-binding#binding-to-keyboard-events

+ Two-way binding => [()]
    Allows you to pass data between components, from parent to child and back from child to parent
    Example: <component-selector-name [(property-from-child)]='property-from-parent'></component-selector-name>
    Link: https://angular.dev/guide/templates/two-way-binding



### Useful links:

+ Angular CLI ⇒ https://angular.dev/tools/cli

+ Routing ⇒ https://angular.dev/guide/routing/common-router-tasks

+ `HttpClient` uses `XMLHttpRequest` API by default but can be set to use the `fetch` API ⇒ https://angular.dev/guide/http

+ `@Input` / `@Output` decorators; Passing data from Parent to Child, and vise versa  ⇒ https://angular.io/guide/inputs-outputs

+ `@for` control flow and `track` => https://angular.dev/guide/templates/control-flow

+ Pipes ⇒ https://angular.dev/guide/pipes#

+ Two-way binding ⇒ https://angular.dev/guide/templates/two-way-binding#