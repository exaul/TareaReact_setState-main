import { useState } from 'react';

function CounterV3() {
    const [person, setPerson] = useState({
        name: "Edwin",
        age: 23,
        color: "black",
    });

    function handleIncrementar() {
        setPerson({
            ...person,
            name: "Exaul",
        });
    }

    return(
        <div>
            <h1>Contador Versión 3</h1>
            <h1>{person.name}</h1>
            <button onClick={handleIncrementar}>
                Incrementar
            </button>
        </div>
    );
}

export default CounterV3;