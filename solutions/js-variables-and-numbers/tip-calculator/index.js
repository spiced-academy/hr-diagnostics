/* 
Steps

1. Create a new JavaScript file in VS Code.
2. Initialize and assign values to 2 variables:
3. A variable which will hold the value of the meal cost.
4. A variable which will hold the value of the tip percentage.
5. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called tipAmount.
6. Calculate the total cost of the meal, including tip, by adding the mealCost variable and the tipAmount variable, and store the result in a variable called totalCost.
7. Log out a message using the console.log() method that should look like this: // The total cost of your bill is: 33 euros 
8. Run your code by typing node index.js in the terminal and hitting enter.
*/

const mealCost = 30;
const tipPercentage = 0.1;

const tipAmount = mealCost * tipPercentage;
const totalCost = mealCost + tipAmount;

console.log("The total cost of your bill is: " + totalCost + " euros");
