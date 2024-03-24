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
     // Check if demerit points exceed the suspension threshold
        if (demeritPoints >= pointsThresholdForSuspension) {
            return ("License suspended"); // If demerit points exceed suspension threshold
        } else {
    // Return the demerit points if below the suspension threshold
            return ("Points: " + demeritPoints);
        }
    }
}
