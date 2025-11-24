import WindowWrapper from "../src/components/WindowWrapper"
import PictureBlock from "../src/components/blocks/PictureBlock"
import TopMenu from "../src/components/TopMenu"
import { useState } from 'react'
import '../src/App.css'
import WindowOptions from "../src/components/WindowOptions"
import ClockBlock from "../src/components/blocks/ClockBlock"
import NotesBlock from "../src/components/blocks/NotesBlock"
import EmptyBlock from "../src/components/blocks/EmptyBlock"
import SettingsWindow from "../src/components/SettingsWindow"
import FileMenu from "../src/components/FileMenu"
import ToDoListBlock from "../src/components/blocks/ToDoListBlock"


function area(window: any) {
    return window.width * window.height
}

function AmbiancePage(){
    var workspaceWidth:number = window.innerWidth
    var workspaceHeight:number = window.innerHeight - 30
    console.log(workspaceWidth + " " + workspaceHeight)

    const [windows, setWindows] = useState([
        {
            id: 1,
            type: "todo-list",
            title: `todo-list`,
            src: "",
            colStart: 1,
            colSpan: 8,
            rowStart: 1,
            rowSpan: 7
        }
    ]);
    const [visibleMenu, setVisibleMenu] = useState<string|null>(null);


    const switchMenuVisibility = (menuId: string) => {
        setVisibleMenu((prev) => (prev === menuId ? null : menuId))
    }

    const addWindow = (type: string) => {

        if (windows.length > 6) return
        
        const newId = windows.length + 1
        var newWindow = {
            id: newId,
            type,
            title: `${type.toLocaleUpperCase()}`,
            src: "",
            colStart: 1,
            colSpan: 4,
            rowStart: 1,
            rowSpan: 7
        }

        switch (newWindow.id) {

            case 1:
                Object.assign(newWindow, {
                    colStart: 1,
                    colSpan: 4,
                    rowStart: 1,
                    rowSpan: 7
                });
                break;

            case 2:
                Object.assign(windows[0], {
                    colSpan: 4,
                    rowSpan: 7
                });

                Object.assign(newWindow, {
                    colStart: 5,
                    colSpan: 4,
                    rowStart: 1,
                    rowSpan: 7
                });
                break;

            case 3:
                Object.assign(windows[1], {
                    rowSpan: 3
                });

                Object.assign(newWindow, {
                    colStart: 5,
                    colSpan: 4,
                    rowStart: 4,
                    rowSpan: 4
                });
                break;

            case 4:
                Object.assign(windows[2], {
                    colStart: 7,
                    colSpan: 2
                });
            
                Object.assign(newWindow, {
                    colStart: 5,
                    colSpan: 2,
                    rowStart: 4,
                    rowSpan: 4
                });
                break;

            case 5:
                Object.assign(windows[2], {
                    rowSpan: 2
                });

                Object.assign(newWindow, {
                    colStart: 7,
                    colSpan: 2,
                    rowStart: 6,
                    rowSpan: 2
                });
                break;

            case 6:
                Object.assign(windows[4], {
                    colSpan: 1
                });
            
                Object.assign(newWindow, {
                    colStart: 8,
                    colSpan: 1,
                    rowStart: 6,
                    rowSpan: 2
                });
                break;

            default:
                // Якщо додаються нові айді — ставимо їх у нижню частину сітки
                Object.assign(newWindow, {
                    colStart: 1,
                    colSpan: 2,
                    rowStart: 1,
                    rowSpan: 2
                });
                break;
        }

        switchMenuVisibility("add-window")
        setWindows([...windows, newWindow])
    }

    return (
        <div className="app">
            <TopMenu switchMenuVisibility={switchMenuVisibility}/>
            {visibleMenu === "add-window" && <WindowOptions onAddWindow={addWindow}/>}
            {visibleMenu === "settings" && <SettingsWindow/>}
            {visibleMenu === "file-menu" && <FileMenu/>}
            <div className="windows-container">
                {
                    windows.map((w) => (
                        <WindowWrapper key={w.id} title={w.type} colStart={w.colStart} colSpan={w.colSpan} rowStart={w.rowStart} rowSpan={w.rowSpan}>

                            {w.type === "picture" && <PictureBlock/>}
                            {w.type === "notes" && <NotesBlock/>}
                            {w.type === "clock" && <ClockBlock/>}
                            {w.type === "todo-list" && <ToDoListBlock/>}
                            {w.type === "empty" && <EmptyBlock/>}
                        </WindowWrapper>
                    ))
                }
            </div>
        </div>
    )
}

export default AmbiancePage