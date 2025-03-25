import React from "react"

export interface ChecklistItemProps {
    label: string
    checked: boolean
}

const ChecklistItem = ({label, checked}: ChecklistItemProps) => {
    return (
        <p className={checked ? 'checked' : ''}>
            {label}
        </p>
    )
}

export default ChecklistItem