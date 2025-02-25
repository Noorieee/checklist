import React from "react"
import ChecklistItem, { ChecklistItemProps } from "../ChecklistItem"
import { useState } from "react";

const Checklist = () => {
    const [list, setList] = useState<ChecklistItemProps[]>([]);
    const [inputValue, setInputValue] = useState("");
    const addItem = () => {
        if (inputValue === "") return

        setList([
            ...list, 
            {
                label: inputValue, 
                checked: false
            }   
        ])
        setInputValue("")
    }

    return (
        <div>
            <h1>hello</h1>
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} type="text"/>
            <button onClick={addItem}>Add</button>
            {list.map((item) => (
                <ChecklistItem label={item.label} checked={item.checked}/>
            ))}
        </div>
    )
}

export default Checklist