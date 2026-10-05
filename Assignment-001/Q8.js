function greet(name, callback){
    console.log("hello "+name);
    callback();
}
function farewell(){
    console.log("I Love You");
}
let greatName = "ila";
greet(greatName,farewell);