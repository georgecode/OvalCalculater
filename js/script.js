console.log("hello js works");

$(".hello" ).click(function() {
  console.log("hello");
  var info = document.getElementById('words').value
  console.log(info);
});

var a = "beer";
var b = "pizza";

function oval(a,b){

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

//TESTS RUNNING
isANumber(a,b);












