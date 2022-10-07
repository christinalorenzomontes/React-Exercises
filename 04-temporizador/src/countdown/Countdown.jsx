import { useState, useEffect } from "react";

function Countdown() {
    //targetSeconds, elapsedSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){
        if (targetSeconds === null) return;

        //targetSeconds has a value
        setElapsedSeconds(0);

        let interval = setInterval(function () {
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
        return(
            <>
                <p>Se acabó :)</p>
                <button onClick={()=> setTargetSeconds(null)}>Otra vez</button>
            </>
        )
    }

    if(targetSeconds !== null) {
        return(
            <p>Voy a contar hasta el {targetSeconds} y han pasado {elapsedSeconds}</p>
        )
    }

    return (
        <>
            <p>¿Cuántos segundos quieres contar?</p>
            <form action="#" onSubmit={ ev => parseForm(ev) }>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </>
    )
}

export default Countdown;