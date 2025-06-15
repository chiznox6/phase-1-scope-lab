// Write your solution in this file!
// 1. Declare a variable in global scope called customerName using var and assign it the value 'bob'.
var customerName = 'bob';

// 2. Write a function that uppercases the global customerName variable.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Write a function that declares a global variable bestCustomer and assigns it to 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // Intentionally global because it's not declared with var, let, or const
}

// 4. Write a function that overwrites the bestCustomer variable with 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope called leastFavoriteCustomer.
const leastFavoriteCustomer = 'someone';

// 6. Write a function that attempts to change that constant.
function changeLeastFavoriteCustomer() {
  // This will throw an error because you can't reassign a const
  leastFavoriteCustomer = 'someone else';
}
