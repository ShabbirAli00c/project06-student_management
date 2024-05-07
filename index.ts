#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber: number = (10000 + Math.random() * 90000);

let myBalance: number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function (value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value.";
            },
        },
        {
            name: "courses",
            type: "list",
            message: "Select the course to enrolled",
            choices: ["MS.office", "HTML", "JAVA", "Typescript", "Python"]
        }
    ]
);

const tuitionFee: {[key: string]: number} = {
    "MS.office" : 2000,
    "HTML" : 2500,
    "JAVA" : 5000,
    "Typescript" : 6000,
    "Python" : 10000
};
console.log(`\nTuition Fees: ${tuitionFee[answer.courses]}/-\n` );
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "Select payment method",
            choices: ["Bank Transfer", "Easypaisa", "Jazzczsh"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money:",
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non-empty value.";
            },
        }
    ]
);
console.log(`\nYou Select payment method ${paymentType.payment}\n`);

const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if(tuitionFees === paymentAmount){
    console.log(`Congratulation you hava successfully enrolled in ${answer.courses}.\n`);

let ans = await inquirer.prompt(
    [
        {
            name: "Select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]
);

if(ans.Select ===  "View Status"){
    console.log("\n******Staus******\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tuition Fees Paid ${paymentAmount}`);
    console.log(`Balnce: ${myBalance += paymentAmount}`);  
}else{
    console.log("\nExiting Student Management system\n");
}

}else{
    console.log("Invalid amount due to course\n");
}
