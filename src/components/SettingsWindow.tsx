import { useState } from "react";
import ProfileTab from "./settings-tabs/ProfileTab"
import ScreensTab from "./settings-tabs/ScreensTab"
import ThemesTab from "./settings-tabs/ThemesTab"
import SupportTab from "./settings-tabs/SupportTab"

function SettingsWindow () {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="settings-window">
            <div className="window-header" style={{height: "35px", backgroundColor: "white", border: "var(--inner-border)"}}>
                Settings
            </div>
            <div style={{display: "flex", flexDirection: "row", height: "calc(100% - 35px)"}}>
                <div className="settings-tabs">
                    <button onClick={() => setActiveTab("profile")}>Profile</button>
                    <button onClick={() => setActiveTab("screens")}>My screens</button>
                    <button onClick={() => setActiveTab("themes")}>Themes</button>
                    <button onClick={() => setActiveTab("support")}>Support</button>
                </div>
                <div className="settings-content">
                    {activeTab === "profile" && <ProfileTab/>}
                    {activeTab === "screens" && <ScreensTab/>}
                    {activeTab === "themes" && <ThemesTab/>}
                    {activeTab === "support" && <SupportTab/>}
                </div>                
            </div>

        </div>
    )
}

export default SettingsWindow