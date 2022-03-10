const Contador = () =>{
    const [contador, setContador] = React.useState(0);
    console.log(contador);

    return (
        <div>
            <h1 className= {contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
            <hr/>
            <button onClick={() => setContador(contador +1)} >aumentar</button>
            <button onClick={() => setContador(contador -1)}>disminuir</button>
        </div>
    );
}