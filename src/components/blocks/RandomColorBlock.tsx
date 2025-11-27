import { useState } from "react"

export function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max)
}

export function getRandomColor() {
    let colorCode: string = "#"
    const characters = "123456789abcdef"
    for (let i = 0; i < 6; i++){
        colorCode += characters[getRandomNumber(15)]
    }
    return colorCode
}

function RandomColorBlock() {

    const [randomColor, setRandomColor] = useState(getRandomColor())

    const newRandomColor = () => {
        setRandomColor(getRandomColor())
    }

    return (
        <div className="column-alignment">
            <div className="random-color-square" style={{backgroundColor: randomColor}} onClick={newRandomColor}></div>
            <input className="random-color-code" value={randomColor}></input>
        </div>
    )
}

export default RandomColorBlock