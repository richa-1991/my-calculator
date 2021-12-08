// Done By Hari
// take input from user using cmd
let command = process.argv[2];

if (command) {
    let num1 = parseInt(process.argv[3]);
    let num2 = parseInt(process.argv[4]);
    let error = false;

    if (!Number.isInteger(num1)) {
        console.log("First argument is not integer");
        num1 = 0;
        error = true;
    }

    if (!Number.isInteger(num2)) {
        console.log("Second argument is not integer");
        num2 = 0;
        error = true;
    }

    if ((num1 == 0 || num2 == 0) && command === "/") {
        console.log("All arguments should be greater than zero");
        error = true;
    }

    if (error === false) {
        calc(command, num1, num2);
    }
} else {
    console.log("Please enter arguments");
}

function calc(cmd = "", x = 0, y = 0) {
    switch (cmd.toLocaleLowerCase()) {
        case "add":
            console.log(x + y);
            break;
        case "sub":
            console.log(x - y);
            break;
        case "mul":
            console.log(x * y);
            break;
        case "div":
            console.log(x / y);
            break;
        default:
            console.log("Operator not found!");
            break;
    }
}
