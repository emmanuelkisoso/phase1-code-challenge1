// declare a variable for the marks of the students and then use statements to define grade achieved
const marks =78
    if (marks >79 && marks <=100) {
        console.log ("A")
    }
    else if (marks <=79 && marks >=60) {
        console.log ("B")
    }
    else if (marks <=59 && marks >=49) {
        console.log ("C")
    }
    else if (marks <=48 && marks >40) {
        console.log ("D")
    }
    else if (marks <40 && marks >=0) {
        console.log ("E")
    }
// print an error message if number is not in the 0 to 100 range
    else{
        console.log ("Please enter a number from 0 to 100")
    }