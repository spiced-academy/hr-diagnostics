/* 
Steps

1. Create a new JavaScript file in your preferred code editor (e.g., Visual Studio Code).
2. Initialize a variable to represent the radius of a circle. For example, you can set radius to a specific value, like 5.
3. Calculate the area of the circle using the formula Math.PI * Math.pow(radius, 2) and store the result in a variable called circleArea.
4. Calculate the circumference of the circle using the formula 2 _ Math.PI _ radius and store the result in a variable called circumference.
5. Display the results by logging them to the console. You can use console.log to print the area and circumference. For example:

    For a circle with a radius of 5 units:

    // - The area is approximately 78.54 square units.
    // - The circumference is approximately 31.42 units.

6. Run your JavaScript program to see the calculated area and circumference of the circle with the specified radius.
*/

const radius = 5;

const circleArea = Math.PI * Math.pow(radius, 2);
const circumference = 2 * Math.PI * radius;

console.log("For a circle with a radius of " + radius + " units:");
console.log("- The area is approximately " + circleArea + " square units.");
console.log("- The circumference is approximately " + circumference + " units.");
