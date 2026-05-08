import "./contato.css"


function Contato({nome, telefone, email}) {


    return (
        <>
            <h1> {nome} {telefone} {email}   </h1>
        </>
    )
}

export default Contato