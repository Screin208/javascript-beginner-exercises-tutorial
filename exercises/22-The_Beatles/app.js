let letras1= "let it be, "
let letras2="whisper words of wisdom, "
let letras3="there will be an answer, "
let letras4= "let it be"

function sing(){
    let letra = ''

for(let i = 1 ; i <= 12 ; i++){  
  if(i==5){
    letra += letras2
 
  } else if(i==11){
    letra += letras3

  }else if (i == 12){
    letra += letras4

}else{
    letra += letras1

}
    
}

return letra
}


//Your code above ^^^

console.log(sing());