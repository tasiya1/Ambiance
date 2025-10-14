type TopMenuProps = {
    switchWindowOptionsVisibility: () => void
}

function TopMenu ({switchWindowOptionsVisibility} : TopMenuProps){
    return (
        <div className="top-menu">
            Ambiance for crafting
            <button className="add-window" onClick={switchWindowOptionsVisibility}>+</button>
        </div>
    )
}

export default TopMenu