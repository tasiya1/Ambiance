import WindowWrapper from "./components/WindowWrapper"
import PictureBlock from "./components/blocks/PictureBlock"
import TopMenu from "./components/TopMenu"
import { useState } from 'react'
import './App.css'
import WindowOptions from "./components/WindowOptions"
import ClockBlock from "./components/blocks/ClockBlock"
import NotesBlock from "./components/blocks/NotesBlock"
import EmptyBlock from "./components/blocks/EmptyBlock"
import SettingsWindow from "./components/SettingsWindow"
import FileMenu from "./components/FileMenu"


function area(window: any) {
    return window.width * window.height
}

function App(){
    var workspaceWidth:number = window.innerWidth
    var workspaceHeight:number = window.innerHeight - 30
    console.log(workspaceWidth + " " + workspaceHeight)

    const [windows, setWindows] = useState([
        {
            id: 1,
            type: "picture",
            title: "Picture",
            src: "",
            width: workspaceWidth,
            height: workspaceHeight,
            x:0,
            y:0
        }
    ]);
    const [visibleMenu, setVisibleMenu] = useState<string|null>(null);


    const switchMenuVisibility = (menuId: string) => {
        setVisibleMenu((prev) => (prev === menuId ? null : menuId))
    }

    const addWindow = (type: string) => {

        const findBiggestWindow = () => {
            let currentBiggestWindow = windows[0]
            let secondBiggestWindow = windows[windows.length - 1]
            for(let i = 0; i < windows.length; i++) {
                if (area(windows[i]) > area(currentBiggestWindow)) {
                    secondBiggestWindow = currentBiggestWindow
                    currentBiggestWindow = windows[i]
                } else if (area(windows[i]) > area(secondBiggestWindow) && area(windows[i]) < area(currentBiggestWindow)) {
                    secondBiggestWindow = windows[i]
                }
            }
            return secondBiggestWindow
        }
        if (windows.length > 7) return
        
        const newId = windows.length + 1
        var newWindow = {
            id: newId,
            type,
            title: `${type.toLocaleUpperCase()}`,
            src: "",
            width: workspaceWidth,
            height: workspaceHeight,
            x:0,
            y:0
        }

            switch (newWindow.id) {
                case 1:
                    newWindow.width = workspaceWidth
                    newWindow.height = workspaceHeight
                    break;
                case 2:
                    windows[0].width /= 2
                    newWindow.width = windows[0].width
                    newWindow.height = windows[0].height
                    newWindow.x = windows[0].width
                    newWindow.y = windows[0].y
                    break;
                case 3:
                    windows[0].height /= 2
                    newWindow.width = windows[0].width
                    newWindow.height = windows[0].height
                    newWindow.x = windows[0].x
                    newWindow.y = windows[0].height
                    break;
                
                case 4:
                    windows[2].width /= 2
                    newWindow.width = windows[2].width
                    newWindow.height = windows[2].height
                    newWindow.x = windows[2].width
                    newWindow.y = windows[0].height
                    break;

                case 5:
                    windows[1].height /= 2
                    newWindow.width = windows[1].width
                    newWindow.height = windows[1].height
                    newWindow.x = windows[1].x
                    newWindow.y = windows[1].height
                    break;
                default:
                    var biggestWindow = findBiggestWindow()

                    if (biggestWindow.width > biggestWindow.height){
                        newWindow.width = biggestWindow.width / 2
                        newWindow.height = biggestWindow.height
                        biggestWindow.width /= 2

                        newWindow.x = biggestWindow.x + biggestWindow.width
                        newWindow.y = biggestWindow.y

                    } else {
                        newWindow.width = biggestWindow.width
                        biggestWindow.height /= 2
                        newWindow.height = biggestWindow.height
                        

                        newWindow.y = biggestWindow.y + biggestWindow.height
                        newWindow.x = biggestWindow.x
                    }
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
                        <WindowWrapper key={w.id} title={w.type} width={w.width} height={w.height} x={w.x} y={w.y}>
                            {w.type === "picture" && <PictureBlock/>}
                            {w.type === "notes" && <NotesBlock/>}
                            {w.type === "clock" && <ClockBlock/>}
                            {w.type === "empty" && <EmptyBlock/>}
                        </WindowWrapper>
                    ))
                }
            </div>
        </div>
    )
}


export default App
