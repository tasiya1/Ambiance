import type { ReactNode } from "react"

interface WindowWrapperProps {
    title: string
    colStart: number
    colSpan: number
    rowStart: number
    rowSpan: number
    children?: React.ReactNode
}

function WindowWrapper ({title, colStart, colSpan, rowStart, rowSpan, children} : WindowWrapperProps) {
  return (
    <div className="window" style={{gridColumn: `${colStart} / span ${colSpan}`, gridRow: `${rowStart} / span ${rowSpan}`}}>
        <div className="window-header">
            <span className="window-title">{title}</span>
            <button className="window-close">✖</button>
        </div>
        <div className="window-content">{children}</div>
    </div>
  )
}

export default WindowWrapper