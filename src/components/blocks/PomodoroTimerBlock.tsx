import { useEffect, useRef, useState } from "react";

type Mode = "work" | "rest" | null

function PomodoroTimerBlock() { 
    const WORK_TIME = 25 * 60
    const REST_TIME = 5 * 60

    const [mode, setMode] = useState<Mode>(null)
    const [remaining, setRemaining] = useState<number>(WORK_TIME)

    const modeRef = useRef(mode)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        modeRef.current = mode
    }, [mode])

    const startTimer = () => {
        setRemaining(WORK_TIME)
        setMode("work")
    }

    useEffect(() => {
        if (!mode) {
            clearTimeRef()
            return
        }

        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setRemaining(prev => (prev - 1))
            }, 1000);
        }

        return () => {
            clearTimeRef()
        }

    }, [mode])

    const stopTimer = () => {
        setMode(null)
        setRemaining(WORK_TIME)
        clearTimeRef()
    }

    const clearTimeRef = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
        timerRef.current = null
    }

    useEffect(() => {
        if (remaining > 0) return

        if (modeRef.current === "work") {
            setRemaining(REST_TIME)
            setMode("rest")
        } else if (modeRef.current === "rest") {
            setRemaining(WORK_TIME)
            setMode("work")
        }
    }, [remaining])

    const onOffButtonClick = () => {
        if (!mode) {
            startTimer()
        } else {
            stopTimer()
        }
    }

    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    const formatTime = (n: number) => {return n.toString().padStart(2, "0")}

    return (<div className={`pomodoro-window column-alignment ${mode === "work"? 'work-time' : 'rest-time'}`}>
        <div className={`pomodoro-section`}>
            {formatTime(minutes)}<span>:</span>{formatTime(seconds)}
        </div>
        <div>
            <button className="pomodoro-button" onClick={onOffButtonClick}> {mode? '◼' : '▶'} </button>
        </div>
        
    </div>)
}

export default PomodoroTimerBlock