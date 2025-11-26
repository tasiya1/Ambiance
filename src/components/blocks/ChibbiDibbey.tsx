import { useState } from "react"

const sparkles = {
    health: "☘︎",
    boredom: "🎮",
    hunger: "🍔", 
    happiness: "❤︎"
}

function spawnSparkles(e: any, typeOfSparkle: keyof typeof sparkles) {
    const sparkle = document.createElement("span")
    sparkle.innerHTML = sparkles[typeOfSparkle]
    sparkle.classList.add(typeOfSparkle + "-sparkle")
    sparkle.classList.add("sparkle")

    const x = e.clientX
    const y = e.clientY
    sparkle.style.left = x + "px"
    sparkle.style.top = y + "px"

    document.body.appendChild(sparkle)
    sparkle.addEventListener("animationend", () => sparkle.remove())
}

function ChibbiDibbey() {

    const [chibbidibbey, updateChibbidibbey] = useState({
        name: "Tib",
        health: 10,
        bored: 10,
        huungry: 5,
        happiness: 10
    })

    const setName = (e: any) => {updateChibbidibbey(prev => ({...prev, name: "Tibee"}))}
    const setHealth = (e: any) => {spawnSparkles(e, "health"); updateChibbidibbey(prev => ({...prev, health: prev.health + 1}))}
    const setBoredom = (e: any) => {spawnSparkles(e, "boredom"); updateChibbidibbey(prev => ({...prev, bored: (prev.bored > 0)?prev.bored - 1 : prev.bored}))}
    const setHunger = (e: any) => {spawnSparkles(e, "hunger"); updateChibbidibbey(prev => ({...prev, huungry: (prev.huungry > 0)?prev.huungry - 1 : prev.huungry}))}
    const setHappiness = (e: any) => {
        spawnSparkles(e, "happiness");
        updateChibbidibbey(prev => ({...prev, happiness: prev.happiness + 1}))}

    return (<>
        <div className="chibbidibbey-window">
            <div className="chibbidibbey-appearance" onClick={setHappiness}></div>
            <div className="chibbidibbey-stats">
                Name <input value={chibbidibbey.name}></input><button className="chibbidibbey-button" onClick={setName}>set name</button>
                Health <span>{chibbidibbey.health}</span><button className="chibbidibbey-button" onClick={setHealth}>+ give herbs</button>
                Boredom <span>{chibbidibbey.bored}</span><button className="chibbidibbey-button" onClick={setBoredom}>+ entertain</button>
                Hunger <span>{chibbidibbey.huungry}</span><button className="chibbidibbey-button" onClick={setHunger}>+ feed</button>
                Happiness <span>{chibbidibbey.happiness}</span>
            </div>
        </div>
    </>)

}

export default ChibbiDibbey