/*
                            retoUno

Crea una funciÃ³n colorMessage()que tome 2 argumentos de cadena 
favoriteColor y shirtColor.

Si el valor de favoriteColor es el mismo que el valor de shirtColor
devuelve la cadena 'The shirt is your favorite color!'.

En caso contrario, devuelve la cadena.'That is a nice color.'
*/

function colorMessage(favoriteColor, shirtColor) {
  return favoriteColor == shirtColor
    ? "The shirt is your favorite color"
    : "That is a nice color.";
}

console.log(colorMessage("blue", "blue"));

/*
                            retoDos

Crea una funciÃ³n isEven()que tome un nÃºmero como Ãºnico parÃ¡metro. 
La funciÃ³n debe devolver un resultado true si el nÃºmero es par y false 
si el nÃºmero es impar.
*/

function isEven(num) {
  return num % 2 == 0 ? "El número es par" : "El número es impar";
}

console.log(isEven(4));

/*
                             retoTres

Crea una funciÃ³n numberDigits() que tome la variable x como su Ãºnico 
parÃ¡metro.

*Si la variable x estÃ¡ entre 0 y 9, devuelve la cadena 'One digit: N' , 
donde N es el valor de x. Por ejemplo, numberDigits(5) devolverÃ­a:

'One digit: 5'

*Si la variable x estÃ¡ entre 10 y 99, devuelve la cadena 'Two digits: N' , 
donde N es el valor de x. Por ejemplo, numberDigits(12) se generarÃ­a:

'Two digits: 12'

*Cualquier otro valor de x, incluidos los nÃºmeros negativos, 
devuelve la cadena 'The number is: N' , donde N es el valor de x. 
Por ejemplo, numberDigits(-202)se generarÃ­a:
'The number is: -202'
*/

numberDigits = function (x) {
  switch (true) {
    case typeof x != "number":
      return `the value is not a number`;
    case x > -1 && x < 10:
      return `One digit: ${x}`;
    case x > 9 && x < 100:
      return `Two digits: ${x}`;
    default:
      return `The number is: ${x}`;
  }
};

console.log(numberDigits(5));
console.log(numberDigits(25));
console.log(numberDigits(-5));
console.log(numberDigits("5"));
