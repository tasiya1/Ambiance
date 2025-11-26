import WindowWrapper from "../src/components/WindowWrapper"
import PictureBlock from "../src/components/blocks/PictureBlock"
import TopMenu from "../src/components/TopMenu"
import { useEffect, useState } from 'react'
import '../src/App.css'
import WindowOptions from "../src/components/WindowOptions"
import ClockBlock from "../src/components/blocks/ClockBlock"
import NotesBlock from "../src/components/blocks/NotesBlock"
import EmptyBlock from "../src/components/blocks/EmptyBlock"
import SettingsWindow from "../src/components/SettingsWindow"
import FileMenu from "../src/components/FileMenu"
import ToDoListBlock from "../src/components/blocks/ToDoListBlock"
import ChibbiDibbey from "../src/components/blocks/ChibbiDibbey"
import { applyTheme, themes, type ThemeName } from "../src/assets/Themes"

export type Window = {
            id: number,
            type: string,
            title: string,
            src: string,
            colStart: number,
            colSpan: number,
            rowStart: number,
            rowSpan: number
}

export function setWindowLayout(windows: Window[]){
    const windowLayout: Window[] = JSON.parse(JSON.stringify(windows))
    const l: number = windowLayout.length
    switch (l) {

        case 1:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 8, rowStart: 1, rowSpan: 7 });
            break;

        case 2:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 7 });
            break;

        case 3:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 4, rowStart: 4, rowSpan: 4 });
            break;

        case 4:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 4 });
            break;

        case 5:
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 2 });
            Object.assign(windowLayout[4], { colStart: 7, colSpan: 2, rowStart: 6, rowSpan: 2 });
            break;

        case 6: 
            Object.assign(windowLayout[0], { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 7 });
            Object.assign(windowLayout[1], { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 3 });
            Object.assign(windowLayout[2], { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 4 });
            Object.assign(windowLayout[3], { colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 2 });
            Object.assign(windowLayout[4], { colStart: 7, colSpan: 1, rowStart: 6, rowSpan: 2 });
            Object.assign(windowLayout[5], { colStart: 8, colSpan: 1, rowStart: 6, rowSpan: 2 });
            break;

        default:
            // Поки не ставити
    }
    return windowLayout
}

function AmbiancePage(){
    var workspaceWidth:number = window.innerWidth
    var workspaceHeight:number = window.innerHeight - 30
    console.log(workspaceWidth + " " + workspaceHeight)

    useEffect(() => {
        const saved : ThemeName = (localStorage.getItem("theme") || "lilac") as ThemeName;
        applyTheme(saved);
    }, []);

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

    const deleteWindow = (id: number) => {
        setWindows(prev => {
            const filteredWindowArray = prev.filter((w => w.id !== id));
            const newWindowLayout = setWindowLayout(filteredWindowArray)
            return newWindowLayout
        })
    };

    const addWindow = (type: string) => {

        if (windows.length > 6) return;

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

        switchMenuVisibility("add-window")
        setWindows(prev => {
            const updatedWindowArray = [...prev, newWindow]
            return setWindowLayout(updatedWindowArray)
        })
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
                        <WindowWrapper key={w.id} id={w.id} title={w.type} colStart={w.colStart} colSpan={w.colSpan} rowStart={w.rowStart} rowSpan={w.rowSpan} onDelete={() => {deleteWindow(w.id)}}>

                            {w.type === "picture" && <PictureBlock/>}
                            {w.type === "notes" && <NotesBlock/>}
                            {w.type === "clock" && <ClockBlock/>}
                            {w.type === "todo-list" && <ToDoListBlock/>}
                            {w.type === "empty" && <EmptyBlock/>}
                            {w.type === "chibbidibbey" && <ChibbiDibbey/>}
                        </WindowWrapper>
                    ))
                }
            </div>
        </div>
    )
}

export default AmbiancePage