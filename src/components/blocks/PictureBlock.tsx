import { useState } from "react"

function PictureBlock() {

    const [hasSrc, setHasSrc] = useState<boolean>(false)
    const [srcInput, setSrcInput] = useState<string>("")

    const setPicture = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (srcInput.trim() !== "") {
            setHasSrc(true)
        }
    }

    return (
        <>
            {hasSrc ? (
                <img className="picture-block" src={srcInput}/>
                ) : (
                <form className="picture-src-inputs" onSubmit={setPicture}>
                    <input className="picture-src-url" type="url" placeholder="Enter url to image" value={srcInput} onChange={(e) => {setSrcInput(e.target.value)}}/>
                    <button className="set-picture-button" type="submit">Go!</button>
                </form>
            )}
        </>
    )
    
}

export default PictureBlock