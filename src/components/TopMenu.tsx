type TopMenuProps = {
    onAddWindow: () => void
}

function TopMenu ({onAddWindow} : TopMenuProps){
    return (
        <div className="top-menu">
            Ambiance for crafting
            <button className="add-window" onClick={onAddWindow}>+</button>
        </div>
    )
}

export default TopMenu