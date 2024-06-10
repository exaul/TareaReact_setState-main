import { useState } from 'react';

function CounterV2() {
    const [count, setCount] = useState(0);

    function handleIncrementar() {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return(
        <div>
            <h1>Contador Versión 2</h1>
            <h1>{count}</h1>
            <button onClick={handleIncrementar}>
                Incrementar
            </button>
        </div>
    );
}

export default CounterV2;