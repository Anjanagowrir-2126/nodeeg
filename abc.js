
const fs = require("fs");

fs.writeFileSync("user.txt", "Welcome John");

let data = fs.readFileSync("user.txt", "utf8");

function checkUser() {
    if (data === "Welcome John") {
        console.log("Valid User");
    } else {
        console.log("Unknown User");
    }
}

checkUser();