//FRASE INVERTIDA CON MAP

var str = ['papá mamá manzana'];
[].map.call(str, function(x) { return x;})
.reverse().join(''); 


// FRASE INVERTIDA 


var nombre = ["H", "a", "n", "a"];
nombre.reverse();

//FRASE INVERTIDA CADENA SENCILLA

var arrayi = "PalindromoSSomordnilaP Reconocer Oro Nodeseoyoesedon ";
var inversa = "";

for(var i = arrayi.length-1; i>=0; i--)
{ inversa += arrayi[i];
}
console.log(inversa);


//frase cadena

const invertirCadena = cadena => cadena.split("").reverse().join("");
 
let cadena = "rAMON Rabino";
console.log("Cadena:", invertirCadena(cadena));

//con caja de mensaje


const frase = prompt('pon la frase para invertir');
console.log(typeof frase);

const fraseArr = frase.split("");
console.log(fraseArr);

let fraseArrInvertida = [];
let fraseInvertida = "";

for(let i=fraseArr.length; i >= 0 ; i-=1){
    fraseArrInvertida.push(fraseArr[i]);
}
console.log(fraseArrInvertida)

for(let i=0; i <fraseArrInvertida.length-1; i+=1){
    fraseInvertida += fraseArrInvertida[i]
}
console.log(fraseInvertida)


//                                     SOME                
//                                       SOME
//                                           SOME        
//                                         SOME
var arr=[12,81,47,68];  
function test(arr)  
{  
    return(arr>80);  
}  
var ajen=arr.some(test);  
document.write("Esto es: "+ajen); 

//otro some


let marks = [1, 2, 3, 5, 10, 8];

const range = {
    min: 8,
    max: 10
};

let resultado = marks.some(function (e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(resultado);

// OTRO SOME

[1,2,3].some(function(x) { return x > 6; })

// otro some

const greaterThanOne = [1, 2, 3].some(x => x > 1);
console.log(greaterThanOne);

// otro some

