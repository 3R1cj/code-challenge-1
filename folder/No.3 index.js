function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter the benefits:"));

    if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
        alert("Invalid input! Please enter positive numbers for salary and benefits.");
        return;}
    }

    let grossSalary = basicSalary + benefits;
    let nssfDeduction = 0;
    if (grossSalary <= 18000) {
        nssfDeduction = grossSalary * 0.06;
    } else {
        nssfDeduction = 1080; 
    }

    let nhifDeduction = calculateNHIF(grossSalary);
    let taxableIncome = grossSalary - nssfDeduction;
