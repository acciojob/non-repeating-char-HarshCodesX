function firstNonRepeatedChar(str) {
 // Write your code here
	if(str == "" || str.length == 1){
		return null;
	}
	let obj = {};
	for(let i = 0; i < str.length; i++){
		if(obj[str.charAt(i)]){
			obj[str.charAt(i)] += 1;
		}
		else{
			obj[str.charAt(i)] = 1
		}
	}
	for(let item in obj){
		if(obj[item] == 1){
			return item;
		}
	}
	return null; 
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

