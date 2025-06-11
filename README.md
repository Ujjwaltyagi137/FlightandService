#Welcome to flights service

## Project setup
 - clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env ` file in the root directory and add the following environment  variable
     - `PORT 3000`

    - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

    ```
{
    "development": {
    "username": "your login name",
    "password": "your password",
    "database": "flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}



    ```