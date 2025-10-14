type WindowOptionsProps = {
    onAddWindow: (type: string) => void
    isVisible: boolean
}

function WindowOptions ({onAddWindow, isVisible} : WindowOptionsProps){
    return (
        <div className="window-options" style={{
            visibility: isVisible? "visible" : "hidden",
            opacity: isVisible? "1" : "0"
        }}>
            <span className="menu-description">Select type of content</span>
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