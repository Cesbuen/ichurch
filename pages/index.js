import {useState} from 'react';

function Home() {
    return (
        <div>
            <Formulario />
        </div>
    )
}

function Formulario() {
    const [dado, setEnviar] = useState(1);

    function Exibir(){
        setEnviar(dado+1);
    }

    return (
        <div>
            <button onClick={Exibir}>Contar +1</button> <br/>
            <h1>Contagem: {dado}</h1>
        </div>
    )
}

export default Home;