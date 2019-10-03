import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo'
    const isTrue = true;

    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Escencial de React</h2>
            <img src="" alt="React"/>
            {isTrue ? <h4>Esto es Verdadero</h4> : <h5>Esto es Falso</h5>}
            {isTrue && <h4>Soy Verdadero</h4>}
        </div>
    )
}

export default HolaMundo;