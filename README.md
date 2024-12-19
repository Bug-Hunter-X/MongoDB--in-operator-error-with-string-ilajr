# MongoDB $in Operator Error with String

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with JavaScript.

The error occurs when a string is passed to the `$in` operator instead of an array of values. The `$in` operator is used to match documents where a field has any value within an array.  This example shows the incorrect usage and the correct solution.

## Bug
The `bug.js` file contains the incorrect query.

## Solution
The `bugSolution.js` file provides the correct solution. 
