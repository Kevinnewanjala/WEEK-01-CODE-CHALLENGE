// Import the prompt-sync module
const prompt = require("prompt-sync")({ sigint: true });

// Function to calculate grade based on the entered mark
function calculateGrade(mark) {

    // Validate the input mark
    if (mark<0 || mark>100){
        return "Invalid mark. Kindly enter a mark between 0 and 100";
    }

 // Check if mark is greater than 79   
    if (mark > 79) {
        return "Grade: A";
 // Check if mark is between 60 and 79 (inclusive)       
    } else if (mark >= 60 && mark <= 79) {
        return "Grade: B";
 // Check if mark is between 49 and 59 (inclusive)       
    } else if (mark >= 49 && mark <= 59) {
        return "Grade: C";
 // Check if mark is between 40 and 49 (inclusive)       
    } else if (mark >= 40 && mark <= 49) {
        return "Grade: D";
 // Check for any other mark below 40
    } else {
        return "Grade: E";
    }
}