// Update with your config settings.
const env = require("./src/config/env");

module.exports = {

  development: {
    
      client: env.DB_CLIENT,
      connection: {
        host : env.DB_HOST,
        user : env.DB_USER,
        password : env.DB_PASSWORD,
        database : env.DB_NAME
      },
    migrations:{
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
