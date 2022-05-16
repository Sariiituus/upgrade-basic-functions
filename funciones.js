// Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne >= numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

console.log(sum(2, 8));
console.log(sum(12, 6));
console.log(sum(10, 8));



// Iteración #2: Buscar la palabra más larga
//Completa la función que tomando un array de strings como argumento devuelva el más largo,
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let longestWord = "a";
  for (const iterator of param) {
    if (iterator.length > longestWord.length) {
      longestWord = iterator;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));



//Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(array) {
    let suma = 0;
    for (let i=0; i < array.length; i++) {
        suma += array[i];
    
    }
    return suma;
}

console.log(sumNumbers(numbers));



//Iteración #4: Calcular el promedio
//Calcular un promedio es una tarea extremadamente común.

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let promTotal = 0;
    for (let i = 0; i < param.length; i++) {
        promTotal += param[i];
    }
    console.log(param);
    return promTotal/param.length;
  
}

console.log(average(numbers2));




//Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y
// cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];



function averageWord(array) {
    let listNumber = 0;
    for (let elements of array) {
        if (typeof elements === "number") {
            listNumber += elements;
        }
        else if (typeof elements === "string") {
            listNumber += elements.length;
        }
    }

    return listNumber;
}



console.log(averageWord(mixedElements));



// Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let yaComprobadas = [];

function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (!yaComprobadas.includes(array[i])) {
            yaComprobadas.push(array[i]);
        }
    }
    return yaComprobadas;
}

console.log(removeDuplicates(duplicates));


// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array y 
// el valor que desea comprobar que existe dentro de dicho array
// comprueba si existe el elemento, en caso que existan nos devuelve un true 
// y la posición de dicho elemento y por la contra un false.


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function finderName(arr, valor) {
    
    for (let index = 0; index < arr.length; index++) {
        let elemento = arr[index];
        if (elemento == valor) {
            return [true, index];
        }
    }

    return false;
}

console.log(finderName(nameFinder, 'Sara'));
console.log(finderName(nameFinder, 'Natasha'));
      






  // Iteration #8: Contador de repeticiones
  // Crea una función que nos devuelva el número de veces que se repite
  // cada una de las palabras que lo conforma.


  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(arr) {
    let resultados = {};
    
    for (const palabra of arr) {
        // 1. busco si existe la palabra en el diccionar resultados.
        // 1.1 Si existe -> coger el valor (contador), aumentarlo en 1 (sumar1), y actualizar el objeto resultados
        // 1.2 Si no existe, -> introducir la clave y valor 1 (porque es la primera vez que aparece)
        if (resultados[palabra] != undefined) { // ya tenia la palabra vista de antes
            let contadorActualParaPalabra = resultados[palabra];
            resultados[palabra] = contadorActualParaPalabra + 1;
        }
        else { // es la primera vez que veo la palabra
            resultados[palabra] = 1;
        }
    }

    return resultados;
  }

  console.log(repeatCounter(counterWords));
  