import React from "react"
import ChecklistItem, { ChecklistItemProps } from "../ChecklistItem"
import { useState } from "react";

type MoveDirection = "up" | "down"

const Checklist = () => {
    const [list, setList] = useState<ChecklistItemProps[]>([]);
    const [inputValue, setInputValue] = useState('');
    const addItem = (): void => {
        if (inputValue === '') {
            return
        } 

        setList([
            ...list, 
            {
                label: inputValue, 
                checked: false
            }   
        ])
        setInputValue('')
    }

    const removeItem = (index: number): void => {
        const firstHalf = list.slice(0, index)
        const secondHalf = list.slice(index + 1)
        const newList = [...firstHalf, ...secondHalf]
        setList(newList)
    }

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addItem()
        }
    }

    const moveItem = (index: number, direction: MoveDirection) => {
        let newIndex
        if (direction === 'up') {
            newIndex = index - 1
        } else {
            newIndex = index + 1
        }
        
        const newList = [...list]

        const selectedItem = newList[index]
        const newPosition = newList[newIndex]
        newList[index] = newPosition
        newList[newIndex] = selectedItem
        setList(newList)
    }
    
    const renderButtons = (index: number) => {
        if (index === 0 && list.length > 1) {
            return (
                <button onClick={() => { moveItem(index, 'down') }}>Down</button>
            )
        } else if (index === list.length - 1 && list.length > 1) {
            return (
                <button onClick={() => { moveItem(index, 'up') }}>Up</button>
            )
        } else if (list.length === 1) {
            return
        } else {
            return (
                <>
                    <button onClick={() => { moveItem(index, 'down') }}>Down</button>
                    <button onClick={() => { moveItem(index, 'up') }}>Up</button>
                </>
            )
        }
    }

    const setCheckboxItem = (index: number) => {
        const newList = [...list]
        newList[index].checked = !newList[index].checked
        setList(newList)
    }

    return (
        <div>
            <h1>hello</h1>
            <input 
                value={inputValue} 
                onKeyDown={(event) => handleOnKeyDown(event)} 
                onChange={(event) => {setInputValue(event.target.value)}} 
                type="text" 
            />
            <button onClick={() => {addItem()}}>Add</button>
            {list.map((item, index) => (
                <div key={`${item.label}-${index}`}>
                    <input type="checkbox" checked={item.checked} onChange={() => setCheckboxItem(index)}/>
                    <ChecklistItem label={item.label} checked={item.checked}/>
                    <button onClick={() => {removeItem(index)}}>Delete</button>
                    {renderButtons(index)}
                </div>    
            ))}
        </div>
    )
}

export default Checklist