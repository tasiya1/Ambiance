import WindowWrapper from "./components/WindowWrapper"
import PictureBlock from "./components/blocks/PictureBlock"
import TopMenu from "./components/TopMenu"
import { useState } from 'react'
import './App.css'




function App(){

    const [windows, setWindows] = useState([
        {
            id: 1,
            title: "Picture - 1",
            src: "https://i.pinimg.com/736x/e7/b5/9f/e7b59f9fc9696ec4a1ba94a2f695747d.jpg"
        }
    ]);

    const addWindow = () => {
        const newId = windows.length + 1
        const newWindow = {
            id: newId,
            title: `Picture - ${newId}`,
            src: "https://i.pinimg.com/736x/11/a7/94/11a794c2280eab49b2bd639027b20f2e.jpg"
        }

        setWindows([...windows, newWindow])
    }


    return (
        <div className="app">
            <TopMenu onAddWindow={addWindow}></TopMenu>
            {
                windows.map((w) => (
                    <WindowWrapper key={w.id} title={"Picture - " + w.id}>
                        <PictureBlock src={w.src}></PictureBlock>
                    </WindowWrapper>
                ))
            }
            
        </div>
    )
}


export default App
