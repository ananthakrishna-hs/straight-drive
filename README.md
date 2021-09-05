# StraightDrive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Installation
- Download the latest(LTS) version of Node.js with npm using the [Node.js official link](https://nodejs.org/en/download/).
- Clone or download [this repository](https://github.com/ananthakrishna-hs/straight-drive.git).
- Go to the root folder of the project and run:
    - `npm install`
    - `npm start`<br>
  This will run the development application at [http://localhost:4200/](http://localhost:4200/).

## Frameworks and libraries used
- [Angular CLI](https://github.com/angular/angular-cli) v12.2.4 - *For core application development*  
- [NgBootstrap](https://ng-bootstrap.github.io/#/home) v10.0.0 - *For buttons and modal*
- [IvyCarousel](http://ivylab.space/carousel) v2.1.2 - *For image carousel*
- [Angular-FontAwesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) v0.9.0 - *For basic icons*
- [DigitOnlyDirective](https://github.com/changhuixu/ngx-digit-only) v2.3.0 - *For numeric field validations*

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Solution
1. Angular router was used to create `/default`, `/register` and `/success` paths, with **route guard** applied to `/success`.
2. Using CSS animations, header of page was animated. Using IvyCarousel, an image gallery with custom configurations was developed. **Resuable components** were made to achieve FAQ section. Bootstrap CTA(Call to Action) button was placed to route to `/register`.
3. Form fields with two-way-binding were implemented and for numeric fields, a directive was used. All fields have custom styles. Each field is validated against a set of rules and Bootstrap modal was implemented to show errors on submit. Form also contains confirmation modal which displays the data entered. Post confirmation, `sheetdb` API is used to insert data. Following successfull API call, the route `/success` is activated and routed to the same.
4. **Canvas element** was used to render success tick on the success page. It also reuses the FAQ components used in the landing page. The page also contains link to `/home`.

