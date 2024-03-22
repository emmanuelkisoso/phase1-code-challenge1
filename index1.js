// a function that shows the grade groups and the respective grades to be show
function descriptionOfGrades(marks) {
    const marks=78
    if (marks >79) {
        return 'A';
    }
    else if (marks <=79 && marks >=60) {
        return 'B';
    }
    else if (marks <=59 && marks >=49) {
        return 'C';
    }
    else if (marks <=48 && marks >40) {
        return 'D';
    }
    else {
        return 'E';
    }
}
// a function that will allow users to put in marks,display an error if wrong and calculate the grade if input is correct
function displayGrades() {
    let marks =parseFloat(prompt("student marks"));
    if (isNaN(marks) || marks <0 || marks >100) {
        console.log("Please put a number from 0 to 100");
    }
    else {
        let grade = descriptionOfGrades(marks);
        console.log (grade);
    }
}
// calling the above function to calculate and display the students grade
displayGrades();