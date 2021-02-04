# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

//DIRECTIONS START HERE
-After installing dependencies,
  -start up the server by running "npm run start-dev"
    -if you get this message in the server terminal:
      "listening on port 5008!
       CONNECTION TO DATABASE SUCCESSFUL"
      -then go ahead and seed the database by running "npm run seed-database"
    -if you don't get the "connection has been established successfully" message:
      -run the "database/schema.js" file in node
      -confirm you have gotten the "connection successful" message in the server terminal, then seed the database by running "npm run seed-database"

-when incorporating this into your proxy:
  -in the most parent React Component (SimilarProductsComponent.jsx) of this service, you will see "reactDOM.render" at the bottom. This service needs to be rendered to a div in your index.html file called "similar"
  -in your proxy's express server, provide an "app.get" endpoint called "/similar", which should direct a request to this repo's express server.