import { useEffect, useState } from "react";

function ClockBlock () {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=> {
        const interval = setInterval (()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return(
        <div className="clock-container">
            <span className="time">{time}</span>
        </div>
    )
}

export default ClockBlock