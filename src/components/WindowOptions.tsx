type WindowOptionsProps = {
    onAddWindow: (type: WindowType) => void
}

export type WindowType = "picture" | "notes"| "clock" | "todo-list" | "empty" | "chibbidibbey" | "random-color" | "random-idea" | "roll-dice" | "toilet-paper" | "fortune-cookie" | "pomodoro-timer"

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
                <button className="window-type-button" onClick={() => onAddWindow("pomodoro-timer")}>Pomodoro timer</button>
                <button className="window-type-button" onClick={() => onAddWindow("fortune-cookie")}>Fortune cookie</button>
                <button className="window-type-button" onClick={() => onAddWindow("toilet-paper")}>Toilet paper roll</button>
            </div>
            
        </div>
    )
}

export default WindowOptions