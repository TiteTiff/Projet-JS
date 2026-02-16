/*let kelvins = 294; //déclaration de la variable kelvins qui a pour valeur 294
let celsius = kelvins - 273; //déclaration de la variable celsius qui a pour valeur kelvins - 273 soit le calcul permettant de convertir des kelvin en celsius
let fahrenheits = celsius * (9 / 5) + 32;//déclaration de la variable fahrenheits qui a pour valeur celsius * (9 / 5) + 32 soit le calcul permettant de convertir des celsius en fahrenheits
console.log(Math.floor(fahrenheits));//arrondi à l'entier inférieur la valeur de fahrenheits et l'afficher
*/
var kelvins = prompt("Quelle est la température en Kelvins aujurd'hui?");
let celsius = kelvins - 273;
let fahrenheits = celsius * (9 / 5) + 32;
console.log(Math.floor(fahrenheits));
