async function cadastarContato(objetoContato){
    console.log(objetoContato);
    

    let resposta = await fetch('http://localhost:3000/contatos', {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application-json; charset=UTF-8"
        }
    });
}
    
function validarFormulario() {
    let nome = document.getElementById('nome').value.trim();
    let sobrenome = document.getElementById('sobrenome').value.trim();
    // let email = document.getElementById('email').value.trim();
    // let pais = document.getElementById('pais').value.trim();
    // let ddd = document.getElementById('ddd').value.trim();
    // let telefone = document.getElementById('telefone').value.trim();
    // let cep = document.getElementById('cep').value.trim();
    // let rua = document.getElementById('rua').value.trim();
    // let numero = document.getElementById('numero').value.trim();
    // let complemento = document.getElementById('complemento').value.trim();
    // let bairro = document.getElementById('bairro').value.trim();
    // let cidade = document.getElementById('cidade').value.trim();
    // let estado = document.getElementById('estado').value.trim();
    // let anotacoes = document.getElementById('anotacoes').value.trim();

    let quantidadeErros = 0;

    if (nome.length == 0) {
        formError('nome');
        quantidadeErros++;
    } else {
        ReiniciaBorda('nome');
    }
    if (sobrenome.length == 0) {
        formError('sobrenome');
        quantidadeErros++;
    } else {
        ReiniciaBorda('sobrenome');
    }
    // if (email.length == 0) {
    //     formError('email');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('email');
    // }
    // if (pais.length == 0) {
    //     formError('pais');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('pais');
    // }
    // if (ddd.length == 0) {
    //     formError('ddd');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('ddd');
    // }
    // if (telefone.length == 0) {
    //     formError('telefone');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('telefone');
    // }
    // if (cep.length == 0) {
    //     formError('cep');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('cep');
    // }
    // if (rua.length == 0) {
    //     formError('rua');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('rua');
    // }
    // if (numero.length == 0) {
    //     formError('numero');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('numero');
    // }
    // if (complemento.length == 0) {
    //     formError('complemento');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('complemento');
    // }
    // if (bairro.length == 0) {
    //     formError('bairro');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('bairro');
    // }
    // if (cidade.length == 0) {
    //     formError('cidade');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('cidade');
    // }
    // if (estado.length == 0) {
    //     formError('estado');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('estado');
    // }
    // if (anotacoes.length == 0) {
    //     formError('anotacoes');
    //     quantidadeErros++;
    // } else {
    //     ReiniciaBorda('anotacoes');
    // }

    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatório(s) não preenchido(s).");
        quantidadeErros = 0;
    }

    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome,
        // email: email,
        // pais: pais,
        // ddd: ddd,
        // telefone: telefone,
        // cep: cep,
        // rua: rua,
        // numero: numero,
        // complemento: complemento,
        // bairro: bairro,
        // cidade: cidade,
        // estado: estado,
        // anotacoes: anotacoes
    };

    let cadastrado = cadastarContato(objetoContato);
    return false;
}

//função que pinta a cor do campo que falta preencher
function formError(fieldId) {
    document.getElementById(fieldId).style.border = '1px solid red';
    document.getElementById(fieldId).focus();
}

function ReiniciaBorda(fieldId) {
    document.getElementById(fieldId).style.border = 'none';
}


async function buscarEndereco(cep){
    if (cep.trim().length < 8) {
        alert("O campo CEP é obrigatório e deve conter 8 dígitos.");
        return false;
    }

    try {
        
            aguardandoCampos();

            let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            let dados = await retorno.json();
            console.log(dados);
            
            document.getElementById('rua').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('estado').value = dados.uf;
        } catch {
            alert("Erro ao procurar endereço.");
        }

function aguardandoCampos(){
    document.getElementById('rua').value = "Aguardando...";
    document.getElementById('bairro').value = "Aguardando...";
    document.getElementById('cidade').value = "Aguardando...";
    document.getElementById('estado').value = "Aguardando...";
}


}