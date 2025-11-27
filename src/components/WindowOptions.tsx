type WindowOptionsProps = {
    onAddWindow: (type: string) => void
}

export type WindowType = {
    "picture": string,
    "notes": string,
    "clock": string,
    "todo-list": string,
    "empty": string,
    "chibbidibbey": string,
    "random-color": string,
    "random-idea": string,
    "roll-dice": string,
    "toilet-paper": string,
    "fortune-cookie": string,
    "pomodoro-timer": string
}

function WindowOptions ({onAddWindow} : WindowOptionsProps){
    return (
        <div className="window-options">
            <span className="window-header" style={{backgroundColor: "white"}}>Select type of content</span>
            <div className="options-grid">
                <button className="window-type-button" onClick={() => onAddWindow("picture")}>Picture</button>
                <button className="window-type-button" onClick={() => onAddWindow("notes")}>Notes</button>
                <button className="window-type-button" onClick={() => onAddWindow("clock")}>Clock</button>
                <button className="window-type-button" onClick={() => onAddWindow("todo-list")}>To-do list</button>
                <button className="window-type-button" onClick={() => onAddWindow("empty")}>Empty</button>
                <button className="window-type-button" onClick={() => onAddWindow("chibbidibbey")}>ChibbiDibbey</button>
                <button className="window-type-button" onClick={() => onAddWindow("random-color")}>Random color</button>
                <button className="window-type-button" onClick={() => onAddWindow("random-idea")}>Random idea</button>
                <button className="window-type-button" onClick={() => onAddWindow("roll-dice")}>Roll a dice</button>
            </div>
            
        </div>
    )
}

export default WindowOptions