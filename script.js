function firstNonRepeatedChar(str) {
 // Write your code here
	if(str == ""){
    return null;
  }
  let flag = true;
  let res = [];
  let freq = {};
  let arr = str.split("");
  
  
  for(let char of arr){
    if(freq[char]){
        freq[char]++;
    }
    else{
        freq[char] = 1;
    }
}

for(char of arr){
    if(freq[char] == 1){
        return char;
    }
    
    res.push(freq[char]);
  
}

for(let char of res){
  if(char != 1){
    flag = false;
  }
  else{
    flag = true;
  }
}
if(flag == false){
  return null;
}
}

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

