let frutasCitricas = ["Limão", "Laranja", "Tangerina", "Abacaxi"];

console.log(frutasCitricas);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);

let frutaremovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`A fruta removida foi: ${frutaremovida}`);

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);