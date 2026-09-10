function readypizza(){
    console.log("pizza is ready");
}
function orderpizza(call){
        call();
    console.log("pizza is being prepared");
    

}
orderpizza(readypizza);
