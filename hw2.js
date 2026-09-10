const userName = "Alex";
const initialBal = 1000;
const amtAdded = 500;
const amtSpent = 700;

function updateWallet(name , currentbalance , added , spent){
    return name === "guest"? "Access Denied" : currentbalance + added - spent;

}
const result = updateWallet(userName,initialBal,amtAdded,amtSpent);

console.log("Result:", result);
console.log(result>0);
console.log("Type of result:", typeof result);
