import { useState } from 'react';

function Counter() {
    // El Estado
    const [counter, setCounter] = useState(0);
    
    return(
        <div>
            <p>
                Haz hecho clik { counter } veces
            </p>
            <button onClick={ ()=>{ setCounter(counter + 1)} }>Incrementar</button>
        </div>
    );
}

export default Counter;