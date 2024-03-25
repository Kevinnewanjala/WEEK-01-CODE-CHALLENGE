// Import the prompt-sync module
const prompt = require("prompt-sync")({ sigint: true });

// Define function to check the speed
function checkSpeed(speed) {

    // Define the speed limit, demerit points per 5km over the limit, and points threshold for license suspension
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
    const pointsThresholdForSuspension = 12;

    // Check if speed is within the limit
    if (speed <= speedLimit) {
        return "Ok"; // If speed is within limit
    
    } else {
     // Calculate demerit points for exceeding speed limit
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
     
       // Update the total demerit points
       totalDemeritPoints += demeritPoints;
        
       // Check if demerit points exceed the suspension threshold
       if (totalDemeritPoints >= pointsThresholdForSuspension) {
           return {
               points: totalDemeritPoints,
               cumulativePoints: totalDemeritPoints
           }; // If demerit points exceed suspension threshold
       } else {
           return {
               points: demeritPoints,
               cumulativePoints: totalDemeritPoints
           }; // Return the demerit points and cumulative points
       }
   }
}

// Initialize the total demerit points
let totalDemeritPoints = 0;


// Initialize the cumulative points
let cumulativePoints = 0;

// Ask the user to enter the speed
while (true) {
    const speed = parseFloat(prompt("Enter the speed (or 'q' to quit): "));
    
    if (isNaN(speed)) {
        break; // Exit the loop if input is not a number
    }
    
    // Check the speed and update the total demerit points
    const result = checkSpeed(speed, totalDemeritPoints);
    totalDemeritPoints = result.cumulativePoints;

    // Print the demerit points and cumulative points
    console.log("Points:", result.points);
    console.log("Cumulative Points:", totalDemeritPoints);

    // Check if the license should be suspended
    if (totalDemeritPoints >= 12) {
        console.log("License Suspended");
        break; // Exit the loop if license is suspended
    }
}