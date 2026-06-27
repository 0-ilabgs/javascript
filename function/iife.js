// Without name creating IIFE.
(function (n){
for (n; n>0; n--){
    console.log(n)
}
})(3);


// IIFE with name.
(function countdown(n){
for (n; n>0; n--){
    console.log(n)
}
})(8);
