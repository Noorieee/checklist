import React from "react"
import ChecklistItem, { ChecklistItemProps } from "../ChecklistItem"
import { useState } from "react";

const Checklist = () => {
    const [list, setList] = useState<ChecklistItemProps[]>([]);
    const [inputValue, setInputValue] = useState("");
    const addItem = ():void => {
        if (inputValue === "") {
            return
        } 

        setList([
            ...list, 
            {
                label: inputValue, 
                checked: false
            }   
        ])
        setInputValue("")
    }

    const removeItem = (index: number):void => {
        const firstHalf = list.slice(0, index)
        const secondHalf = list.slice(index + 1)
        const newList = [...firstHalf, ...secondHalf]
        setList(newList)
    }

    const handleOnKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addItem()
        }
    }

    return (
        <div>
            <h1>hello</h1>
            <input value={inputValue} onKeyDown={(event) => handleOnKeyDown(event)} onChange={(event) => {setInputValue(event.target.value)}} type="text"/>
            <button onClick={() => {addItem()}}>Add</button>
            {list.map((item, index) => (
                <div key={`${item.label}-${index}`}>
                    <ChecklistItem label={item.label} checked={item.checked}/>
                    <button onClick={() => {removeItem(index)}}>Delete</button>
                </div>    
            ))}
        </div>
    )
}

export default Checklist