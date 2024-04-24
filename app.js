import inquirer from "inquirer";
let mybalance = 1000;
console.log('My current balance ' + mybalance);
const mypin = 1234;
const answer = await inquirer.prompt([
    {
        message: "enter your pin",
        type: "number",
        name: "pin"
    }
]);
// conditional statement=====////
if (answer.pin === mypin) {
    console.log("Correct your pin");
    const operationAns = await inquirer.prompt([
        {
            message: "plz select option",
            type: "list",
            name: "action",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.action === "Withdraw") {
        const amountAns = await inquirer.prompt([
            {
                message: "enter your amount",
                name: "amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Your balance is insufficient.");
        }
        else {
            mybalance -= amountAns.amount;
            console.log("Your remaining balance: " + mybalance);
        }
    }
    else if (operationAns.action === "Check balance") {
        console.log("your balance is " + mybalance);
    }
}
else {
    console.log("Incorrect pin");
}
