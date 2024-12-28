<<<<<<< HEAD
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const mysql = require('mysql');
const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path'); // for file path

// Function to query the test database
function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}

// Function to parse XLSX file
function parseXlsx(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const jsonData = xlsx.parse(fs.readFileSync(filePath));
      resolve(jsonData);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = (on, config) => {
  // Hook to parse XLSX file
  on('task', {
    parseXlsx({ filePath }) {
      return parseXlsx(filePath);
    },
  });

  // Hook for custom task to interact with the test database
  on('task', {
    queryTestDb(query) {
      return queryTestDb(query, config);
    },
  });

  // Add more custom tasks if needed
  module.exports = (on, config) => {
    on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
  }
};
=======
/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const mysql = require('mysql');
const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path'); // for file path

// Function to query the test database
function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}

// Function to parse XLSX file
function parseXlsx(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const jsonData = xlsx.parse(fs.readFileSync(filePath));
      resolve(jsonData);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = (on, config) => {
  // Hook to parse XLSX file
  on('task', {
    parseXlsx({ filePath }) {
      return parseXlsx(filePath);
    },
  });

  // Hook for custom task to interact with the test database
  on('task', {
    queryTestDb(query) {
      return queryTestDb(query, config);
    },
  });

  // Add more custom tasks if needed
  module.exports = (on, config) => {
    on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
  }
};
>>>>>>> 809c4f67599cc5eebdbddbbfdc66a16b75ed390d
