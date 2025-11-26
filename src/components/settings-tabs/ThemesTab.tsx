import { applyTheme } from "../../assets/Themes"

function ThemesTab() {
    return (<>
        <h3>Select theme</h3>
        <div className="themes-container">
            <div className="theme-button" onClick={() => {applyTheme("lilac")}} style={{backgroundImage: "url(https://i.pinimg.com/originals/bc/d7/48/bcd74849e39b7b5c0e43897a79d8fbe0.gif)"}}>Lilac(Default)</div>
            <div className="theme-button" onClick={() => {applyTheme("frutiger_aero")}} style={{backgroundImage: "url(https://images.steamusercontent.com/ugc/2304216839481601476/8AC055C92427A686CF04CB22A55AB6349ED57557/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"}}>Frutiger Aero</div>
            <div className="theme-button" style={{backgroundImage: "url(https://images.steamusercontent.com/ugc/870748399458647939/4E5B352B8FB2C9E9EF63248B8D591288B48F72AB/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"}}>Noir</div>
            <div className="theme-button" onClick={() => {applyTheme("cyberpunk")}} style={{backgroundImage: "url(https://images.steamusercontent.com/ugc/2438013375536940927/D370DBF7BFC83ED36F783F08A598FFF3E71A1D61/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)"}}>Cyberpunk</div>
            <div className="theme-button" onClick={() => {applyTheme("pastel")}} style={{backgroundImage: "url(https://i.pinimg.com/originals/db/8d/5b/db8d5bf6928701fbfb9c576163964f9c.gif)"}}>Pastel pink</div>
            <div className="theme-button" style={{backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e1f7b81-52c8-4ea8-9085-c1114c8c0700/deoxhyt-70ee857d-e9c2-485d-8c57-2e414acd66ff.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80ZTFmN2I4MS01MmM4LTRlYTgtOTA4NS1jMTExNGM4YzA3MDAvZGVveGh5dC03MGVlODU3ZC1lOWMyLTQ4NWQtOGM1Ny0yZTQxNGFjZDY2ZmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dksq89BWwnaxSJrMKDcny5jiVTJ8XvZIaqPkKMHMhjE)"}}>Synthwave</div>
            <div className="theme-button" onClick={() => {applyTheme("forest")}} style={{backgroundImage: "url(https://i.pinimg.com/736x/ba/38/10/ba3810ba0829e2bdcc0c0bd218ac851a.jpg)"}}>Forest</div>
            <div className="theme-button" style={{backgroundImage: "url(https://img.itch.zone/aW1nLzExNTk4NzYzLmdpZg==/original/vFi3Zd.gif)"}}>Pixel Art</div>
            <div className="theme-button" style={{backgroundImage: "url(https://i.pinimg.com/originals/09/75/6d/09756d27dd4144a14a6fac6fd7de5f44.gif)"}}>Kawaii</div>
            <div className="theme-button" style={{backgroundImage: "url(https://media.tenor.com/4PUlE7swo54AAAAM/sea-sunset.gif)"}}>Sunset</div>
            <div className="theme-button" onClick={() => {applyTheme("typewriter")}} style={{backgroundImage: "url(https://www.theruglady.com.au/cdn/shop/files/SER-YURI-BEIGEPortrait.png?v=1688359878)"}}>Typewriter</div>
            <div className="theme-button" style={{backgroundImage: "url()"}}></div>
        </div>
    </>)
}

export default ThemesTab