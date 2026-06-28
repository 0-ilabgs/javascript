

function compute(a,b, callback){
    return callback(a, b);
}


function add(x, y){
return x + y;
}
console.log(compute(3, 4, add));
