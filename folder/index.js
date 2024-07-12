function getStudentGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = Number(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please enter a value between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log("The grade for marks " + marks + " is: " + grade);
}
