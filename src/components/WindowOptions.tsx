type WindowOptionsProps = {
    onAddWindow: (type: string) => void
}

function WindowOptions ({onAddWindow} : WindowOptionsProps){
    return (
        <div className="window-options">
            <span className="window-header" style={{backgroundColor: "white"}}>Select type of content</span>
            <div className="options-grid">
                <button className="window-type-button" onClick={() => onAddWindow("picture")}>Picture</button>
                <button className="window-type-button" onClick={() => onAddWindow("notes")}>Notes</button>
                <button className="window-type-button" onClick={() => onAddWindow("clock")}>Clock</button>
                <button className="window-type-button" onClick={() => onAddWindow("empty")}>Empty</button>
            </div>
            
        </div>
    )
}

export default WindowOptions