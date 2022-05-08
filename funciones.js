// Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if (numberOne >= numberTwo) {
        return numberOne;
    }
    else {
        return numberTwo;
    }
  }

  console.log(sum(2,8));
  console.log(sum(12,6));
  console.log(sum(10,8));