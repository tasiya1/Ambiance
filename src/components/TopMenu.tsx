type TopMenuProps = {
    onAddWindow: () => void
}

function TopMenu ({onAddWindow} : TopMenuProps){
    return (
        <div className="top-menu">
            <button className="add-window" onClick={onAddWindow}>+</button>
        </div>
    )
}

export default TopMenu