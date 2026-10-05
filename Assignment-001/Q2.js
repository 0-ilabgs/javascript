// Creating a function "checkElibility".
function checkEligibility(age){
 	if(age>=18){
 	   return "Eligible";
 	}
 	else
 	   return "Not Eligible";
}
const age = 56;
// calling function.
console.log(checkEligibility(age));
