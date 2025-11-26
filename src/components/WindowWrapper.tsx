import type { ReactNode } from "react"
import { setWindowLayout } from "../../pages/AmbiancePage"

interface WindowWrapperProps {
    id: number
    title: string
    colStart: number
    colSpan: number
    rowStart: number
    rowSpan: number
    onDelete: (id: number) => void
    children?: React.ReactNode  
}

export function NoWindowsMessage() {
    return (<div className="no-window-message">
        <span>No active windows. Click + to add window</span>
    </div>)
}

function WindowWrapper ({id,    title, colStart, colSpan, rowStart, rowSpan, onDelete , children} : WindowWrapperProps) {
  return (
    <div className="window" style={{gridColumn: `${colStart} / span ${colSpan}`, gridRow: `${rowStart} / span ${rowSpan}`}}>
        <div className="window-header">
            <span className="window-title">{title}</span>
            <button className="window-close" onClick={() => onDelete(id)}>✖</button>
        </div>
        <div className="window-content">{children}</div>
    </div>
  )
}

export default WindowWrapper