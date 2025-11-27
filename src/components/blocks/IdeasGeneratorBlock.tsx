import { useState } from "react"
import { getRandomNumber } from "./RandomColorBlock"

export function getRandomIdea() {
    const emoji = "😄😆😊😃😏😍😘😚😳😌😆😁😉😜😝😀😗😙😛😴😟😦😧😮😬😕😯😑😒😅😓😥😩😔😞😖😨😰😣😢😭😂😲😱😫😠😡😤😪😋😷😎😵👿😈😐😶😇👽💛💙💜❤💚💔💓💗💕💞💘💖✨⭐🌟💫🔥💩👍👎👌👊✊✌👋🙌🙏👏💪🤘🐱🐶🐻🍕🍔🍟🍣🎂🚗🚀⚡✅❗❓💡📚🎵🎨🎧🔮"

    const emojiList = [...emoji]

    return emojiList[getRandomNumber(emojiList.length)]
}

function IdeasGeneratorBlock() {

    const [ideas, setIdeas] = useState([
        getRandomIdea(),
        getRandomIdea(),
        getRandomIdea()
    ])

    const newIdeas = () => {
        setIdeas([getRandomIdea(), getRandomIdea(), getRandomIdea()])
    }

    return (<div className="idea-line" onClick={newIdeas}>
        <div className="idea-emoji">{ideas[0]}</div>
        +
        <div className="idea-emoji">{ideas[1]}</div>
        +
        <div className="idea-emoji">{ideas[2]}</div>
    </div>)
}

export default IdeasGeneratorBlock