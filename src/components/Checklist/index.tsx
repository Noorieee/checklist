import React from "react"
import ChecklistItem, { ChecklistItemProps } from "../ChecklistItem"


const Checklist = () => {
    const list: ChecklistItemProps[] = [
        {
            label: "hello",
            checked: true,
        },
        {
            label: "sgffdgd",
            checked: true,
        },
        {
            label: "test",
            checked: false,
        }
    ]

    return (
        <div>
            <h1>hello</h1>
            {list.map((item) => (
                <ChecklistItem label={item.label} checked={item.checked}/>
            ))}
        </div>
    )
}

export default Checklist