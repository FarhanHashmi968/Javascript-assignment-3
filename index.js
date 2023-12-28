// 1. Find grades =>Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.


// let marks = parseInt(prompt("Enter your no. out of 50"));
// let grade;

// switch (true) {
//     case marks >= 41 && marks <= 50:
//         grade = "A";
//         break;
//     case marks >= 31 && marks <= 40:
//         grade = "B";
//         break;
//     case marks >= 21 && marks <= 30:
//         grade = "C";
//         break;
//     case marks >= 11 && marks <= 20:
//         grade = "D";
//         break;
//     case marks >= 0 && marks <= 10:
//         grade = "E";
//         break;

//     default:
//         grade = "Please Enter a genuine no."
//         break;
// }
// console.log(grade);

// 2. Get Value => You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it.
// P or p - PrepBytes
// Z or z - Zenith
// E or e - Expert Coder
// D or d - Data Structure

// let input = prompt("Enter value")
// let output;

// switch (true) {
//     case input === "P" || input === "p":
//         output = "PrepBytes"
//         break;
//     case input === "Z" || input === "z":
//         output = "Zenith"
//         break;
//     case input === "E" || input === "e":
//         output = "Expert coder"
//         break;
//     case input === "D" || input === "d":
//         output = "Data structure"
//         break;
//     default:
//         output = "Please Enter value between P, Z, E, D"
//         break;
// }
// console.log(output);

// 3. Find the maximum out of three numbers.=> Take three numbers and print the largest number among them.
// let a = parseInt(prompt("Enter first no."));
// let b = parseInt(prompt("Enter second no."));
// let c = parseInt(prompt("Enter third no."));

// if (a > b && a > c) {
//     console.log(a + " is the largest no.")
// }
// else if (b > a && b > c) {
//     console.log(b + " is the largest no.")
// }
// else if (c > a && c > b) {
//     console.log(c + " is the largest no.")
// }
// else if (c == a && c == b) {
//     console.log("All are equal.")
// }

// else {
//     console.log("Please enter a valid no.")
// }


// 4. Second Smallest => You are given integers X, Y and Z and your task is to find and return the second smallest integer among the three provided integers


// let x = parseInt(prompt("Enter 1st no."))
// let y = parseInt(prompt("Enter 2nd no."))
// let z = parseInt(prompt("Enter 3rd no."))
// let output;

// if (x != y && y != z && z != x) {
//     switch (true) {
//         case ((x < y && x > z) && (x > y && x < z)):
//             output = x + " is the second largest"
//             break;
//         case  ((y > z && y < x) && (y > x && y < z)):
//             output = y + " is the second largest"
//             break;
//         case  ((z > y && z < x) && (z < y && z > x)):
//             output = z + " is the second largest"
//             break;
//         default:
//             output = "Please Enter value between P, Z, E, D"
//             break;
//     }

// console.log(output)

//     //     if ((x < y && x > z) && (x > y && x < z)) {
//     //         console.log(x + " is the second largest")
//     //     }
//     //     else if ((y > z && y < x) && (y > x && y < z)) {
//     //         console.log(y + " is the second largest")
//     //     }
//     //     else if ((z > y && z < x) && (z < y && z > x)) {
//     //         console.log(z + " is the second largest")
//     //     }

// }
// else {
//     console.log("Please enter unequal no.")
// }

// 5.  Check whether the triangle is Acute or Obtuse =>Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// const A = parseInt(prompt("Enter your A value"));
// const B = parseInt(prompt("Enter your A value"));
// const C = parseInt(prompt("Enter your A value"));

// if (A + B + C === 180) {
//     if (A > 90 || B > 90 || C > 90) {
//         console.log("Obtuse")
//     }
//     else {
//         console.log("Acute")
//     }
// }
// else {
//     console.log("Invalid input")
// }