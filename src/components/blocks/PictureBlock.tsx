
interface PictureBlockProps {
    src: string
}

function PictureBlock({src} : PictureBlockProps) {
    return <img className="picture-block" src={src}/>
}

export default PictureBlock