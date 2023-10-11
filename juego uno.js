//juego UNO
const rl = require ("readline-sync");

var deck = [];
var colors = ["yellow", "blue", "green", "red"];
var types = ["comun", "especial", "comodin"];
var card = {
  color: null, //amarillo azul verde o rojo
  Number: null, // numero 0-9
  type: null, //comun,especial, y comodines
};

for (var color = 0; color < colors.length; color++) {
  //console.log ("pos colors:",colors[color]);
  for (var cnumber = 0; cnumber < 10; cnumber++)
    // console.log("numero", cnumber);
    deck.push({ color: colors[color], number: cnumber, type: "comun" });

  for (var cnumber1 = 1; cnumber1 < 10; cnumber1++) {
    deck.push({ color: colors[color], number: cnumber1, type: "comun" });
    //console.log("numero", cnumber1);
  }
  deck.push({ color: colors[color], number: "+4", type: "especial" });
  deck.push({ color: colors[color], number: "+4", type: "especial" });
  deck.push({ color: colors[color], number: "b", type: "especial" });
  deck.push({ color: colors[color], number: "b", type: "especial" });
  deck.push({ color: colors[color], number: "r", type: "especial" });
  deck.push({ color: colors[color], number: "r", type: "especial" });
}

deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "+4", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });
deck.push({ color: null, number: "cc", type: "comodin" });


//console.log(deck);

const players = rl.question("¿cuantos jugadores seran?", {})
const totalcards = players * 7;
//repartir 7 cartas x jugador
//recorroel total de targetas
//(total de tarjetas = tarjetas/7 x jugador)
//un arreglo x jugador
var cardsplayers = {};

for(var cTcards = 0; cTcards <7; cTcards++){
  for( var cplayers = 0; cplayers < players; cplayers++){
  //console.log ("players",cplayers);
  if (!cardsplayers ["player_"+cplayers]) {
    cardsplayers ["player_"+cplayers] = [];
  }
  cardsplayers ["player_"+cplayers].push(deck[cTcards]);
}
}
console.log (cardsplayers);
//npm init sirve para incializar un procecto en node
//npm i o npm install <modulo> sirve para intalar el modulo
