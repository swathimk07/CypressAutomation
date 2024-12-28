// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// 
//https://docs.cypress.io/api/cypress-api/custom-commands
import 'cypress-file-upload';
require('cypress-iframe');

import '@4tw/cypress-drag-drop'
require('cypress-downloadfile/lib/downloadFileCommand')
Cypress.Commands.add('login', (username, password) => { 
   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //visit - built in comm
        cy.get('input[name="username"]').type("username")
        cy.get('input[name="password"]').type("password")
        cy.get('button[type="submit"]').click();
     
 })
 Cypress.Commands.add("parseXlsx", (inputFile) => {
        return cy.task('parseXlsx', { filePath: inputFile })
 })
