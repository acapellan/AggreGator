# AggreGator - A UF Online CEN3031 Project

**FOR** current and former University of Florida students and professors **WHO** want to prepare for
upcoming courses, perform well in their current studies, and remain updated on the latest industry
trends, **THE** AggreGator is a web-based service **THAT** provides a forum for Gators to discuss,
ask questions, share material, and encourage each other achieve their goals in the classroom and the
boardroom. **UNLIKE** other message boards or blog services, **OUR** product is the only service of
its kind made by Gators and only for Gators past, present, and future.

## Authors

- **[Brian Hoblin](https://github.com/GoonerBrian)**, _SCRUM Master/Developer_
- **[Alejandro Capellan](https://github.com/acapellan)**, _Project Manager/Developer_
- **[Jacob Boney](https://github.com/jacobboney)**, _Developer_
- **[Steven DeLoach](https://github.com/sfdeloach)**, _Developer_

## System Context Model

![context-model.png](./context-model.png)

## Stack

A list of the frameworks and technologies used to build this project:

- [React](https://reactjs.org/), Single-page application for the frontend
- [Node.js](https://nodejs.org/en/) 16.13.2, Javascript runtime on the server
- [npm](https://www.npmjs.com/) 8.1.2, Package manager for Nodejs
- [Express](https://expressjs.com/) (via npm) for backend API operations
- [Passport](https://www.passportjs.org/), Simple, unobtrusive authentication for Node.js
- [Bootswatch](https://bootswatch.com/), Bootstrap-compatible CSS framework
- [MongoDB Atlas](https://www.mongodb.com/), NoSQL Database as a Service (DBaaS)
- [Mongoose](https://mongoosejs.com/), Elegant MongoDB object modeling for Node.js
- [Heroku](https://www.heroku.com/), Platform as a Service (PaaS) used to demonstrate prototype
- [Visual Studio Code](https://code.visualstudio.com/), Our team's preferred IDE
- [Mocha](https://mochajs.org/) (via npm), JavaScript test framework
- [Chai](https://www.chaijs.com/) (via npm), Assertion library

## Project Updates

- [x] Project Proposal
- [x] User Stories
- [x] Storymap
- [x] Software Architecture
- [x] System Context Model
- [x] Sprint 0 Product Backlog Created
- [x] Sprint 0 Planning Poker
- [x] Sprint 0 Backlog
- [x] Sprint 0 Execution and Design Presentation
- [x] Sprint 0 Retrospective
- [x] Sprint 1 Product Backlog Groomed
- [x] Sprint 1 Planning Poker
- [x] Sprint 1 Backlog
- [x] Sprint 1 Execution and Technical Presentation
- [x] Sprint 1 Retrospective
- [x] Sprint 2 Product Backlog Groomed
- [x] Sprint 2 Planning Poker
- [x] Sprint 2 Backlog
- [x] Sprint 2 Execution and Final Presentation

## Instructions

The contents of this zip file is a complete system build of our final project. The code to run the
client is located in the `aggregator` directory and the code to run the server is located in the
`backend` directory. A very high-level view of the project's directory structure is as follows:

```text
Root-Project-Directory
 ┣━ aggregator  ⇽ this is the react frontend code
 ┃   ┣━ build   ⇽ during standalone and production mode, the client is served from here
 ┃   ┗━ src     ⇽ during development mode, the client is served from here
 ┗━ backend     ⇽ this is the express.js API code
     ┣━ config  ⇽ important configuration keys are defined here depending on the mode
     ┗━ app.js  ⇽ the main entry point for the backend API express server
```

Unzip the provided project zip file. This project includes all necessary dependencies and a build of
the latest client. There is no need to run any installation or build scripts once the project is
unzipped.

### Prerequisites

This project relies upon the Node.js v16.13.2 or higher, and npm v8.1.2 or higher. Verify Node.js
and npm is properly installed by running the following command:

```sh
$ node -v
v16.13.2

$ npm -v
8.1.2
```

### How to start the application in standalone mode

If live reloading is not desired and one only wishes to see the application run as quickly as
possibly on their local machine, standalone mode is suggested. Once the project is unzipped, run the
following command inside the root project directory:

```sh
$ npm start
```

Then open a browser to `http://localhost:5000` to view the AggreGator application.

### How to start the application in development mode

In development mode, two independent servers are started, one serving the backend API and the other
serving the client to enable live reloading. To start the project in development mode, run the
following command inside the root project directory:

```sh
$ npm run dev
```

A browser window should open automatically to `http://localhost:3000` after both servers have
finished loading.

### How to run tests locally

To run tests locally, run the following command from inside the root project directory:

```sh
$ npm run test
```
