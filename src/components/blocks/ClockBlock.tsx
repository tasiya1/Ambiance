import { useEffect, useState } from "react";

function ClockBlock () {

    const [time, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes());

    useEffect(()=> {
        const interval = setInterval (()=>{
            setTime(new Date().getHours() + ":" + new Date().getMinutes())
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    return(
        <div className="clock-container">
            <span className="time">{time}</span>
        </div>
    )
}

export default ClockBlock