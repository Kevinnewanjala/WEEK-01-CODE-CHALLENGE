// Import the prompt-sync module
const prompt = require("prompt-sync")({ sigint: true });

// Function to calculate grade based on the entered mark
function calculateGrade(mark) {
    // Check if mark is greater than 79
    if (mark > 79) {
        return "Grade: A";
    }
    // Check if mark is between 60 and 79 (inclusive)
    else if (mark >= 60 && mark <= 79) {
        return "Grade: B";
    }
    // Check if mark is between 49 and 59 (inclusive)
    else if (mark >= 49 && mark <= 59) {
        return "Grade: C";
    }
    // Check if mark is between 40 and 49 (inclusive)
    else if (mark >= 40 && mark <= 49) {
        return "Grade: D";
    }
    // Check for any other mark below 40
    else {
        return "Grade: E";
    }
}

// Ask the user to enter the student's mark
const studentMark = parseFloat(prompt("Enter the student's mark: "));

// Validate the input mark
if (studentMark < 0 || studentMark > 100) {
    console.log("Invalid mark. Kindly enter a mark between 0 and 100");
} else {
    // Calculate the grade based on the entered mark
    const grade = calculateGrade(studentMark);

    // Print the grade to the console
    console.log(grade);
}