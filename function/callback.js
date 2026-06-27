

function greet(name, callback){
    console.log("hello," + name);
    callback();
}

greet("Alice", function(){
    console.log("Callback excuted.");
});