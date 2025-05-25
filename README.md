# Bots API

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

Bots API is a service designed to help businesses streamline their appointment scheduling process. It allows for the creation of automated bots that can interact with Google Calendar to book, manage, and organize appointments, freeing up valuable time for business owners and staff.

## Features

* Automated appointment scheduling via bots.
* Integration with Google Calendar.
* RESTful API for bot management and interaction.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (which includes npm)
* [PostgreSQL](https://www.postgresql.org/)
* [Git](https://git-scm.com/)

### Setup and Installation

Follow these steps to set up your development environment:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nunutzi10/bots-api.git](https://github.com/nunutzi10/bots-api.git)
    cd bots-api
    ```

2.  **Install dependencies:**
    This command will download and install all the necessary packages defined in `package.json`.
    ```bash
    npm i
    ```

3.  **Set up the PostgreSQL database:**
    * Connect to your PostgreSQL server. You might need to replace `postgres` with your PostgreSQL username if it's different.
        ```bash
        psql -U postgres
        ```
    * Inside the PostgreSQL prompt, create a new database for the application. Replace `name_example` with your desired database name (e.g., `bots_api_db`).
        ```sql
        CREATE DATABASE name_example;
        ```
    * You will also need to set up your database connection URL in a `.env` file. Create a `.env` file in the root of the project and add your `DATABASE_URL`:
        ```env
        DATABASE_URL="postgresql://YOUR_POSTGRES_USER:YOUR_POSTGRES_PASSWORD@localhost:5432/YOUR_DATABASE_NAME?schema=public"
        ```
        Replace `YOUR_POSTGRES_USER`, `YOUR_POSTGRES_PASSWORD`, and `YOUR_DATABASE_NAME` with your actual credentials and the database name you just created.

4.  **Apply database migrations:**
    This command will apply all pending database schema migrations defined in your Prisma schema to the database. It's typically used in production or CI/CD environments. For development, you might use `npx prisma migrate dev`.
    ```bash
    npx prisma migrate deploy
    ```

5.  **Generate Prisma Client:**
    This command generates the Prisma Client based on your Prisma schema. Prisma Client is a type-safe database client that you use to interact with your database from your application code.
    ```bash
    npx prisma generate
    ```

6.  **(Optional) Open Prisma Studio:**
    Prisma Studio is a visual editor for the data in your database. It allows you to view and edit your data easily.
    ```bash
    npx prisma studio
    ```
    This will typically open Prisma Studio in your web browser.

7.  **Run tests:**
    This command will execute the test suite defined in the project to ensure everything is working as expected.
    ```bash
    npm test
    ```

## Available Scripts

In the project directory, you can run the following scripts:

* **`npm start`**
    Runs the app in production mode.
    ```bash
    npm start
    ```

* **`npm run dev`**
    Runs the app in development mode using `nodemon`. Nodemon will automatically restart the server when file changes are detected.
    ```bash
    npm run dev
    ```

* **`npm run prisma:generate`**
    Manually triggers the generation of the Prisma Client. This is usually done automatically after `prisma migrate`, but can be run separately if needed.
    ```bash
    npm run prisma:generate
    ```

* **`npm run prisma:migrate`**
    Runs Prisma migrations during development. This command will create migrations from your schema changes and apply them to the database.
    ```bash
    npm run prisma:migrate
    ```

* **`npm test`**
    Launches the test runner.
    ```bash
    npm test
    ```

## Key Dependencies

* **[@prisma/client](https://www.npmjs.com/package/@prisma/client):** Prisma Client for database interaction.
* **[dotenv](https://www.npmjs.com/package/dotenv):** Loads environment variables from a `.env` file.
* **[express](https://www.npmjs.com/package/express):** Fast, unopinionated, minimalist web framework for Node.js.
* **[googleapis](https://www.npmjs.com/package/googleapis):** Google APIs Node.js Client.
* **[morgan](https://www.npmjs.com/package/morgan):** HTTP request logger middleware for node.js.
* **[openai](https://www.npmjs.com/package/openai):** Official OpenAI Node.js library.
* **[winston](https://www.npmjs.com/package/winston):** A logger for just about everything.

## Development Dependencies

* **[chai](https://www.npmjs.com/package/chai):** BDD / TDD assertion library for node and the browser.
* **[mocha](https://www.npmjs.com/package/mocha):** Simple, flexible, fun JavaScript test framework for Node.js & The browser.
* **[nodemon](https://www.npmjs.com/package/nodemon):** Utility that will monitor for any changes in your source and automatically restart your server.
* **[prisma](https://www.npmjs.com/package/prisma):** Prisma CLI.

## Repository

* **URL:** `git+https://github.com/nunutzi10/bots-api.git`
* **Issues:** `https://github.com/nunutzi10/bots-api/issues`

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details (though not explicitly provided in `package.json`, ISC usually implies a `LICENSE` file or the license text directly in the README). You can create a `LICENSE` file with the ISC license text if you don't have one.

## Homepage

* `https://github.com/nunutzi10/bots-api#readme`

---

**Note on `npx prisma migrate deploy` vs `npx prisma migrate dev`:**

* `npx prisma migrate dev`: Use this command during development. It creates migration files based on your schema changes and applies them. It will also prompt you if it detects potential data loss.
* `npx prisma migrate deploy`: This command is intended for production or CI/CD environments. It applies existing migration files and does not attempt to create new ones or prompt for destructive changes. Ensure your migration files are committed to your repository before deploying.

You might want to adjust the "Apply database migrations" step in the setup to recommend `npx prisma migrate dev` for local development, and mention `npx prisma migrate deploy` for production deployments.

## Google Auth

* http://localhost:5445/api/auth/google?tenantId=tenantId

## ApiKey

* `npm run generate-key -- --tenantId tenantId`: Use this command to create an API key