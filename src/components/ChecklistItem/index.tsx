import React from "react"

export interface ChecklistItemProps {
    label: string
    checked: boolean
}

const ChecklistItem = ({label, checked}:ChecklistItemProps) => {
    return (
        <p>{label}</p>
    )
}

export default ChecklistItem