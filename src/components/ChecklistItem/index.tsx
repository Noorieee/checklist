import React from "react"

export interface ChecklistItemProps {
    label: string
    checked: boolean
    className?: string
}

const ChecklistItem = ({label, checked, className}:ChecklistItemProps) => {
    return (
        <p className={className}>
            {label}
        </p>
    )
}

export default ChecklistItem