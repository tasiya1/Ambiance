import type { ReactNode } from "react"

interface WindowWrapperProps {
  title?: string
  children?: ReactNode
  width?: number
  height?: number
  x?: number
  y?: number
}

function WindowWrapper ({title = "Window", children, width, height, x, y} : WindowWrapperProps) {
  return (
    <div className="window" style={{width: width, height: height, top: y, left: x}}>
        <div className="window-header">
            <span className="window-title">{title}</span>
            <button className="window-close">✖</button>
        </div>
        <div className="window-content">{children}</div>
    </div>
  )
}

export default WindowWrapper