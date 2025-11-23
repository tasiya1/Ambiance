import { Link } from "react-router-dom";

type TopMenuProps = {
    switchMenuVisibility: (menuId: string) => void
}

function TopMenu ({switchMenuVisibility} : TopMenuProps){
    return (
        <div className="top-menu">
            <span>Ambiance for crafting</span>
            <div>
                <button className="top-menu-button" onClick={() => switchMenuVisibility("add-window")}>+</button>
                <button className="top-menu-button" onClick={() => switchMenuVisibility("settings")}>⚙</button>
                <button className="top-menu-button" onClick={() => switchMenuVisibility("file-menu")}>⋮</button>
                <Link to="/login">Log in</Link>
            </div>
            
        </div>
    )
}

export default TopMenu