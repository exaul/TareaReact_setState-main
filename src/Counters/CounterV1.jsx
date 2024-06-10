import { useState } from 'react';

function CounterV1() {
    const [counter, setCounter] = useState(0);

    function handleIncrementar() {
        setCounter(counter + 1);
    }

    return(
        <div>
            <h1>Contador Versión 1</h1>
            <h1>{counter}</h1>
            <button onClick={handleIncrementar}>
                Incrementar
            </button>
        </div>
    );
}

export default CounterV1;