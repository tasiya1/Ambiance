import type { ReactNode } from "react"
import PictureBlock from "./blocks/PictureBlock"


interface WindowWrapperProps {
  title?: string
  children?: ReactNode
}

function WindowWrapper ({title = "Window", children} : WindowWrapperProps) {
  return (
    <div className="window">
        <div className="window-header">
            <span className="window-title">{title}</span>
            <button className="window-close">✖</button>
        </div>
        <div className="window-content">{children}</div>
    </div>
  )
}

export default WindowWrapper