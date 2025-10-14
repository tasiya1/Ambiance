import WindowWrapper from "./components/WindowWrapper"
import PictureBlock from "./components/blocks/PictureBlock"
import TopMenu from "./components/TopMenu"
import { useState } from 'react'
import './App.css'
import WindowOptions from "./components/WindowOptions"
import ClockBlock from "./components/blocks/ClockBlock"
import NotesBlock from "./components/blocks/NotesBlock"
import EmptyBlock from "./components/blocks/EmptyBlock"


function area(window: any) {
    return window.width * window.height
}

function App(){

    const getRandomPicture = () => {
        const links = ["https://i.pinimg.com/736x/e7/b5/9f/e7b59f9fc9696ec4a1ba94a2f695747d.jpg",
            "https://i.pinimg.com/1200x/9a/1b/44/9a1b448b50b92fdebc1775441d586b40.jpg",
            "https://i.pinimg.com/736x/77/a2/a7/77a2a7ef6a8c2170ec09b1c5fae7ae6f.jpg",
            "https://i.pinimg.com/1200x/6d/6f/8d/6d6f8d8c0e5f623250195d946688dc69.jpg",
            "https://i.pinimg.com/736x/ba/e4/e5/bae4e501203b3ad05359e75cf6d6a744.jpg",
            "https://i.pinimg.com/1200x/df/15/2b/df152bff6ca477f821d37a02beed0c4d.jpg",
            "https://i.pinimg.com/736x/ea/b3/09/eab3090ade4be3d6a162e009418a0081.jpg",
            "https://i.pinimg.com/1200x/e2/a6/bc/e2a6bc3863b558e94162841ac198b2f0.jpg",
            "https://i.pinimg.com/1200x/f1/cb/15/f1cb155cc8776f6a3e0d6369bbbe5da9.jpg",
            "https://i.pinimg.com/736x/c0/48/42/c04842c6935c4c64105abde7ba602765.jpg",
            "https://i.pinimg.com/736x/05/d3/99/05d39920b8c1a0b7170606e4c1180aaf.jpg",
            "https://i.pinimg.com/736x/11/a7/94/11a794c2280eab49b2bd639027b20f2e.jpg",
            "https://i.pinimg.com/736x/90/b9/79/90b97911bea86cf7c6fef2caedd53f81.jpg",
            "https://i.pinimg.com/736x/54/71/3f/54713f5911da31b7ce5b4ed058c4bd34.jpg",
            "https://i.pinimg.com/736x/b3/71/35/b37135807bc8f8e98fef905f4f750fcf.jpg",
            "https://i.pinimg.com/736x/28/69/44/2869440ff86df05346c08f200e25ab30.jpg"
        ]
        return links[Math.floor(Math.random() * links.length)]
    }
    

    var workspaceWidth:number = window.innerWidth
    var workspaceHeight:number = window.innerHeight - 30
    console.log(workspaceWidth + " " + workspaceHeight)

    const [windows, setWindows] = useState([
        {
            id: 1,
            type: "picture",
            title: "Picture",
            src: getRandomPicture(),
            width: workspaceWidth,
            height: workspaceHeight,
            x:0,
            y:0
        }
    ]);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);


    const switchWindowOptionsVisibility = () => {
        setIsOptionsVisible((prev) => (!prev))
    }

    const addWindow = (type: string) => {

        setIsOptionsVisible(false)

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
            src: getRandomPicture(),
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
                        newWindow.width = biggestWindow.width * 0.49
                        newWindow.height = biggestWindow.height
                        biggestWindow.width *= 0.51

                        newWindow.x = biggestWindow.x + biggestWindow.width
                        newWindow.y = biggestWindow.y

                    } else {
                        newWindow.width = biggestWindow.width
                        biggestWindow.height *= 0.51
                        newWindow.height *= 0.49
                        

                        newWindow.y = biggestWindow.y + biggestWindow.height
                        newWindow.x = biggestWindow.x
                    }
                    break;
            }

        setWindows([...windows, newWindow])
    }


    return (
        <div className="app">
            <TopMenu switchWindowOptionsVisibility={switchWindowOptionsVisibility} />
            <WindowOptions onAddWindow={addWindow} isVisible={isOptionsVisible}/>
            <div className="windows-container">
                {
                    windows.map((w) => (
                        <WindowWrapper key={w.id} title={w.type} width={w.width} height={w.height} x={w.x} y={w.y}>
                            {w.type === "picture" && <PictureBlock src={w.src} />}
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
