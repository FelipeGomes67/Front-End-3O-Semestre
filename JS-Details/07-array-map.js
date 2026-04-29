const hobbies = ["Correr", "Jogar", "Ler", "Cozinhar", "Viajar", "Fotografar", "Escrever", "Dançar", "Nadar", "Pintar"];

const novoHobbies = hobbies.map((hobby) =>{
    return `<p> ${hobby} </p>`;
})

console.log(novoHobbies);