# Sprint7 - Star Wars

# Angular 17 with json-server & Authentication (json-server-auth) and TailwindCSS

This project is a Star Wars database for starships using Angular 17.3.7 that leverages json-server for a mock backend API with authentication using json-server-auth and TailwindCSS for utility-first styling.

## Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Angular CLI](https://angular.io/cli) (version 17)
- [Git](https://git-scm.com/)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ezequielgdl/sprint-7.git
   ```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the json-server-auth backend API**

The json-server-auth is the mock API backend that holds the user authentication info.
You can register a new user or use test@test.com with password: 1234 to log in.

```bash
npx json-server-auth db.json
```

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

## Technologies Used

- Angular
- TailwindCSS
- JSON-Server with JSON-SERVER-AUTH
