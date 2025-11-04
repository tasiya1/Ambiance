
function SettingsWindow () {


    return (
        <div className="settings-window">
            <div className="window-header" style={{height: "35px", backgroundColor: "white", border: "var(--inner-border)"}}>
                Settings
            </div>
            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
                <div className="settings-tabs">
                    <button>Profile</button>
                    <button>My screens</button>
                    <button>Themes</button>
                    <button>Support</button>
                </div>
                <div className="settings-content">
                    
                </div>                
            </div>

        </div>
    )
}

export default SettingsWindow