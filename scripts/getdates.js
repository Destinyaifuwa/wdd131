// getdates.js

// Select elements by their IDs
const copyrightElem = document.getElementById('copyright');
const lastModifiedElem = document.getElementById('lastModified');

// Set current year
const currentYear = new Date().getFullYear();
copyrightElem.textContent = `© ${currentYear} Your Company Name`;

// Set last modified date
lastModifiedElem.textContent = `Last modified: ${document.lastModified}`;
