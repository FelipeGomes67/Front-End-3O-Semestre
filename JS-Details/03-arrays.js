let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Laranja", "Tangerina"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Framboesa");


console.log(frutasVermelhas);
// console.log(frutasCitricas);
const frutaremovida = frutasVermelhas.pop();
console.log(frutasVermelhas);

console.log(`${frutaremovida} foi removida da cesta de frutas`);