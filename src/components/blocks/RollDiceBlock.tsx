import { useEffect, useState } from "react"
import { getRandomNumber } from "./RandomColorBlock"

const diceSides = [
    [[false, false, false], [false, true, false], [false, false, false]],
    [[true, false, false], [false, false, false], [false, false, true]],
    [[true, false, false], [false, true, false], [false, false, true]],
    [[true, false, true], [false, false, false], [true, false, true]],
    [[true, false, true], [false, true, false], [true, false, true]],
    [[true, true, true], [false, false, false], [true, true, true]]
]

function RollDiceBlock() {
    const [dice, setDice] = useState([[false, false, false], [false, true, false], [false, false, false]])
    const [isRolling, setIsRolling] = useState(false)

    const rollDice = () => {
        setIsRolling(true)

        const rollInterval = setInterval(() => {
            const randomNumber = getRandomNumber(5); 
            setDice(diceSides[randomNumber])
        }, 500);
            
        setTimeout(() => {
            clearInterval(rollInterval)
        }, 2000);

        setTimeout(() => {
            setIsRolling(false)
        }, 3000);
    }

    return (
        <div className="column-alignment" onClick={rollDice}>
            <div className={`dice-cube ${ isRolling && "rolling-dice"}`}>
                <div>{dice[0][0] && "✿"}</div><div>{dice[0][1] && "✿"}</div><div>{dice[0][2] && "✿"}</div>
                <div>{dice[1][0] && "✿"}</div><div>{dice[1][1] && "✿"}</div><div>{dice[1][2] && "✿"}</div>
                <div>{dice[2][0] && "✿"}</div><div>{dice[2][1] && "✿"}</div><div>{dice[2][2] && "✿"}</div>
            </div>
        </div>
        
    )
}

export default RollDiceBlock