
$(".btn" ).click(function() {


	var a = document.getElementById('diamA').value;
	var b = document.getElementById('diamB').value;

//The famous Indian mathematician Ramanujan 
//came up with this better approximation below:
/*	
function oval(a,b){
	var result = Math.PI*(3*(a+b)-Math.sqrt((3*a+b)*(a+3*b)));
	console.log(result);
	return result;

}
*/
	function oval(a,b){
		a=a/2;
		b=b/2;
		var result = 2*Math.PI*Math.sqrt((Math.pow(a, 2)+Math.pow(b, 2))/2)
		console.log(result);
		return result;

	}



//Must be a number
	function isANumber(a,b){
		if(typeof a === 'number' && typeof b === 'number'){
			return true
		}else if(typeof a !== 'number' && typeof b !== 'number'){
			console.log("a & b are not number's");
		}else if(typeof a !== 'number' && typeof b === 'number'){
			console.log("a is not a number");
		}else{
			console.log("a is not a number");
		}
	}
//result is a number
	function resultNum(a,b){
		let test= oval(a,b);
		if(typeof test === 'number'){
			return true
		}else{
			console.log("result is not outputing a number");
		}
	}

//is equal to function


//TESTS RUNNING
	isANumber(a,b);
	resultNum(a,b);

//Results
	var result= oval(a,b);
	console.log(result);
 	$(".results").html(result);

});








