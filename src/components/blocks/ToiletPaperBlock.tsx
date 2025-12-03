import { useState } from "react"

function ToiletPaperBlock() {
    const rollSize = 300
    const rollSpeed = 0.99
    const rollRotation = 50
    const cartonSize = 50
    const runningTailLength = window.innerHeight
    const [toiletpaperSize, setToiletpaperSize] = useState(rollSize)
    const [rotationOfRoll, setRotationOfRoll] = useState(0)
    
    const rollPaper = (e: any) => {
        if (e.deltaY < 0 && toiletpaperSize <= rollSize) { //roll
            setToiletpaperSize(prev => (prev * (2 - rollSpeed)))
            setRotationOfRoll(prev => (prev - rollRotation))
        } else if (e.deltaY > 0 && (toiletpaperSize >= cartonSize + 10)) {  //unroll
            setToiletpaperSize(prev => (prev * rollSpeed))
            setRotationOfRoll(prev => (prev + rollRotation))
        }
    }

    const installNewPaperRoll = () => {
        setToiletpaperSize(rollSize)
        setRotationOfRoll(0)
    }

    return (<div className="toilet-paper-window column-alignment">
        <div className="toilet-paper-roll" style={{ transform: `rotate(${rotationOfRoll}deg)`, width: `${toiletpaperSize}px`, height: `${toiletpaperSize}px`}} onClick={installNewPaperRoll} onWheel={rollPaper}>
            <div className="toilet-paper-carton" style={{ width: `${cartonSize}px`, height: `${cartonSize}px`}}></div>
        </div>
        <div className="toilet-paper-running-tail" style={{left: `calc(50% + ${toiletpaperSize/2 - 3}px)`}}>
        </div>
    </div>)
}

export default ToiletPaperBlock