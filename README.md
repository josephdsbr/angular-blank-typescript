# Angular Blank Typescript

This project was developed to be used as a Blank to start.

Content
==================
- [Angular Blank Typescript](#angular-blank-typescript)
- [Content](#content)
  - [Informations](#informations)
  - [Architecture](#architecture)
    - [What is Flux?](#what-is-flux)
    - [Structure](#structure)
    - [Middleware](#middleware)
  - [Folder Structure](#folder-structure)
  - [Prerequisites](#prerequisites)
  - [Recommendation](#recommendation)
  - [Installation](#installation)
  - [How to use](#how-to-use)
    - [Development server](#development-server)
    - [Build](#build)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)
  - [Technologies](#technologies)

## Informations

This project was developed using the Reactive Pattern (Flux) in Angular 10+.

## Architecture

### What is Flux?

[Flux](https://facebook.github.io/flux/) is an application architecture developed by Facebook to use it on [ReactJS](https://pt-br.reactjs.org/). In the case of Facebook's framework, we could use the [Redux](https://redux.js.org/) library. In-depth, it has based on the Observer Pattern. Flux is for State Management in client-side projects.

In our case, you are going to explore the [NgRx library](https://ngrx.io/), which has based on Redux, but at the same time, it encourages the use of the Reactive Paradigm using the [RxJS library](https://rxjs-dev.firebaseapp.com/).

In general, NgRx and Redux have much more features than Flux suggested at its beginning. But we are going to focus on the basic structures such as dispatchers, actions, views, reducers, middlewares, and stores.

### Structure

How we see in the image below, the data flow is unidirectional. It means that the data pass from a sector to another just in one way. It is extensively used in Reactive programs. In practice, it means that child components cannot update information in their parents.

Flux architecture is quite simple to understand. The **Store** is responsible for maintaining the global **State** object. The **View** is an, for example, a page in which users can interact with the application. Some events can dispatch an Action (which has an identifier and, in some cases, pieces of information) and, all the actions pass through a single **Dispatcher**, which is responsible for register a callback function that updates the states. Then, any changes in the store it is going to update all the Views that depends on its information.

<div align="center">
  <img style="margin: 0 15px !important" src="./github/images/flux-facebook.png" alt="flux-architecture" height="425" />
  <a href="https://facebook.github.io/flux/docs/in-depth-overview/">Direitos autorais</a>
</div>

### Middleware

In Redux we have the **Reducer** where is implemented our logic. It is responsible to identify, based on the action dispatched, how to update the state into the store.
In some cases, it is necessary, depending on the action dispatched, to make some logic before the action reached on the reducer. It is called **Middleware**. In most cases, this calls a **Side Effect** as a request to an API or to dispatch other actions.

<div align="center">
  <img style="margin: 0 15px !important" src="./github/images/redux-architecture-overview-middleware.png" alt="flux-architecture" height="425" />
  <a href="https://blog.novoda.com/introduction-to-redux-in-flutter/">Direitos autorais</a>
</div>

## Folder Structure

    .
    ├── src
    │   ├── app
    │   │   ├── @assets
    │   │   ├── @configuration
    │   │   ├── @core                # Main parts of the application as Initializers and Interceptors
    │   │   ├── @layouts
    │   │   ├── components
    │   │   ├── exceptions           # Global and Local Exception/Error Handlers
    │   │   ├── guard
    │   │   ├── pages
    │   │   ├── pipe                 # Create customized Pipes
    │   │   ├── services
    │   │   ├── store                # Redux module using NGRX
    │   │   ├── util
    │   │   ├── validators
    │   ├── environments
    └──

## Prerequisites

You need to have [Node 12+](https://nodejs.org/en/) or [Yarn 1.2+](https://yarnpkg.com/) installed on your PC.

## Recommendation

We strongly recommend you to change the Application's name from **`angular-blank-template`** to anyone of your choice inside these files: `angular.json`, `package.json`, `e2e\src\app.e2e-spec.ts`, `src/app/app.component.ts`.

## Installation

Run `npm install` or `yarn` to download the dependencies.

## How to use

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technologies

- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)
- [Jest](https://jestjs.io/)
- [Typescript](https://www.typescriptlang.org/)
- [BEM](http://getbem.com/)
