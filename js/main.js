/* variables */
let palabra = "hola";

const numero = 1;
// numero = 2;
console.log(palabra[0]);
console.log(palabra[1]);
console.log(palabra[2]);
console.log(palabra[3]);

 // Error: Variable es constante

// number
// bool = true o false
// string = "" y ''
// undefined
// null

/* complex datatypes */

const array = ["letra", 1, {}, 4];
console.log(array[0])

/* Operadores lógicos y de asignación */

// >, >=, <, <=
// == → ===?
// hasta valor → hasta tipo

console.log('1' == 1);
console.log('1' === 1);
console.log('1' === '1');
console.log("1" + 2);
console.log(1 + 2);
 
/* Condicionales */

if('1' == 1){
    console.log("Son iguales!");
}
/* else if(condicion 2){}*/
else{
    console.log("No son iguales!");
}

switch(palabra){
    case 'a':
        if(mayus){}
        else{}
        break;
    case 'verde':
        break;
    case 'azul':
    case 'rosa':
        break;
    default:
        console.log("paso de tu culo");
        break;
}

/* loops */

// for loop

for(i = 0; i <= 3; i++){
    console.log(i);
}
console.log("-------------");

// while loop
let j = 0;
while(j < 5){
    console.log(j);
    j++;
    // j = Math.random();
}

// do-while

console.log("-------------");

// forEach

array.forEach(item => console.log(item));

/* funciones */

function NombreDeLaFuncion(para1, para2){
    console.log(para1 + " hola mundo " + para2);
}

function Cuadrado(numero){
    cuadrado = numero*numero;
    NombreDeLaFuncion("Como", "estas");
    return cuadrado;
}

NombreDeLaFuncion("Brian", "Juan");
let tres = 3 + Cuadrado(2);
console.log(tres);

/* DOM */

const ejemplo = document.getElementById("ejemplo");

console.log(ejemplo);
console.log(ejemplo.innerHTML);

// ES6 >+
ejemplo.addEventListener('click', () =>{
    ejemplo.innerHTML = 'Juan';
    ejemplo.style.border = "2px solid #000";
    ejemplo.style.padding = "1rem";
    ejemplo.style.width = "50%";
    ejemplo.style.color = "#345345";
    ejemplo.style.fontWeight = "bold";
});