function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);



    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preecha todos os campos");
        return false;
    }

    const imc = calcularImc(peso, altura);
    const textoSituacao = gerarTextoImc(imc);

    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(textoSituacao);


        const objetoIMC = {
            nome: nome,
            altura: altura,
            peso: peso,
            imc: imc,
            situacao: textoSituacao
        };

    const retorno = cadastrarNaApi(objetoIMC);

    const tabela = document.getElementById("cadastro");

    if (tabela) {

    tabela.innerHTML +=
        `
        <tr>
        <td>${nome}</td>
        <td>${altura}m</td>
        <td>${peso}kg</td>
        <td>${imc.toFixed(2)}</td>
        <td>${textoSituacao}</td>
        </tr>
        `;

        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        alert(`Os dados de ${nome} foram cadastrados com sucesso`);
    } else {
        alert("Não foi possível cadastrar");
    }
}

function calcularImc(peso, altura) {
    return (peso / (altura * altura));

}

function gerarTextoImc(imc) {
    if (imc < 16) {
        return "Magreza grave";
    }
    else if (imc < 17) {
        return "Magreza moderada";
    }
    else if (imc < 18.5) {
        return "Magreza leve";
    }
    else if (imc < 25) {
        return "Saudável";
    }
    else if (imc < 30) {
        return "Sobrepeso";
    }
    else if (imc < 35) {
        return "Obesidade grau 1";
    }
    else if (imc < 40) {
        return "Obesidade grau 2";
    }
    else {
        return "Obesidade grau 3";
    }
}

async function cadastrarNaApi(objetoIMC) {
    try {
        const resposta = await fetch('http://localhost:3000/IMC', {
            method: "POST",
            body: JSON.stringify(objetoIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
}
  async function buscarIMCs(){
    try {
    const retorno = await fetch("http://localhost:3000/IMC");
    const dados = await retorno.json();

    console.log(dados);

    const tabela = document.getElementById("cadastro");

    for(let i = 0; i < dados.length; i++){
        tabela.innerHTML +=
        `
        <tr>
        <td>${dados[i].nome}</td>
        <td>${dados[i].altura}m</td>
        <td>${dados[i].peso}kg</td>
        <td>${Number(dados[i].imc).toFixed(2)}</td>
        <td>${dados[i].situacao}</td>
        </tr> `;


    }
    } catch (error) {

      console.log(error);

    }
  }