let cadenaTexto = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 _+-.,!@#$%^&*();/|<>' 555.123.4567	+1-(800)-555-2468 foo@demo.net	bar.ba@test.co.uk"

 let pruebaRegex = /lorem/gi;
//pruebaRegex = /lor|lorem/gi; //con la opción de alteración u "o"
//pruebaRegex = /lorem /gi; //vemos que son exactas, si dejamos un espacio ya no reconoce
//pruebaRegex = /[A-G]/gi;

//pruebaRegex = /dol[ao]/gi; //set o grupo []
//pruebaRegex = /[aeiou]/gi;
//pruebaRegex = /[^aeiou]/gi; //tambien podemos agrear ^que significa lo contrario a o negado
//pruebaRegex = /[A-G]/gi; //rangos abreviado por ejemplo de A a la G

// existen caracteres especiales \n (salto de linea) || ^ principio o $ final de la linea
// el punto (.) que coincide con cualquier caracter || \d cualquier digito && \w con alfanuméricos

//pruebaRegex = /lorem( |,)/gi; // grupo de captura entre ()

//pruebaRegex = /l\w+/gi; los cuantificadores nos indican la cantidad, el signo + nos indica 1 o mas apariciones que empiecen por l seguido de simbolos alfanuméricos (ver la l suelta)

//pruebaRegex = /./gi; con el punto aparece todo, pero que pasa si quiero solo el punto (.)

//pruebaRegex = /\./gi;


console.log(cadenaTexto.match(pruebaRegex).length,);


console.log(pruebaRegex.exec(cadenaTexto));
console.log(pruebaRegex.test(cadenaTexto));
console.log(pruebaRegex.exec(cadenaTexto));
console.log(pruebaRegex.exec(cadenaTexto));

