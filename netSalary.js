// Import the prompt-sync module
const prompt = require("prompt-sync")();

// Entry for basic salary
const basicSalary = parseFloat(prompt("Enter Gross Salary: "));

// Input for additional benefits and exemptions
const disabilityExemption = prompt("Do you have a disability exemption certificate? (Yes/No): ");
const hasMortgage = prompt("Do you have a Mortgage? (Yes/No): ");
const hasLifeInsurance = prompt("Do you have a life insurance policy? (Yes/No): ");
const hasHomeOwnershipPlan = prompt("Do you have a Home Ownership Savings Plan? (Yes/No): ");

// Tax rates based on the provided PAYE rates
let taxRate;
if (basicSalary <= 24000) {
    taxRate = 0.1;
} else if (basicSalary <= 32333) {
    taxRate = 0.25;
} else if (basicSalary <= 500000) {
    taxRate = 0.3;
} else if (basicSalary <= 800000) {
    taxRate = 0.325;
} else {
    taxRate = 0.35;
}

// Calculate gross salary
const grossSalary = basicSalary;

// Calculate tax amount
const tax = grossSalary * taxRate;

// NHIF rates based on the provided NHIF rates
let nhifDeductions;
if (grossSalary <= 5999) {
    nhifDeductions = 150;
} else if (grossSalary <= 7999) {
    nhifDeductions = 300;
} else if (grossSalary <= 11999) {
    nhifDeductions = 400;
} else if (grossSalary <= 14999) {
    nhifDeductions = 500;
} else if (grossSalary <= 19999) {
    nhifDeductions = 600;
} else if (grossSalary <= 24999) {
    nhifDeductions = 750;
} else if (grossSalary <= 29999) {
    nhifDeductions = 850;
} else if (grossSalary <= 34999) {
    nhifDeductions = 900;
} else if (grossSalary <= 39999) {
    nhifDeductions = 950;
} else if (grossSalary <= 44999) {
    nhifDeductions = 1000;
} else if (grossSalary <= 49999) {
    nhifDeductions = 1100;
} else if (grossSalary <= 59999) {
    nhifDeductions = 1200;
} else if (grossSalary <= 69999) {
    nhifDeductions = 1300;
} else if (grossSalary <= 79999) {
    nhifDeductions = 1400;
} else if (grossSalary <= 89999) {
    nhifDeductions = 1500;
} else if (grossSalary <= 99999) {
    nhifDeductions = 1600;
} else if (grossSalary <= 999999) {
    nhifDeductions = 1700;
} else {
    nhifDeductions = 1700;
}

// NSSF contributions based on the provided NSSF rates
let nssfEmployeeContribution = 0.06 * Math.min(7000, basicSalary);
let nssfEmployerContribution = 0.06 * Math.min(7000, basicSalary);

// Calculate total deductions
const totalDeductions = tax + nhifDeductions + nssfEmployeeContribution;

// Calculate net salary after deductions
let netSalary = grossSalary - totalDeductions;

// Display net salary
console.log("Net Salary after deductions: " + netSalary);