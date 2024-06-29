/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('AsmitDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([
  {
    "name": "Java",
    "price": 2000,
    "instructor": "Asmit"
  },
  {
    "name": "Python",
    "price": 1500,
    "instructor": "Jane"
  },
  {
    "name": "C++",
    "price": 1800,
    "instructor": "John"
  },
  {
    "name": "JavaScript",
    "price": 1700,
    "instructor": "Doe"
  },
  {
    "name": "Ruby",
    "price": 1600,
    "instructor": "Smith"
  }
]
);



// Print a message to the output window.
console.log(`Done inserting data.`);