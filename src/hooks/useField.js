import React,{useState} from 'react'

export const useField = (initialState) => {
    const [value,setValue] = useState(initialState)
    const onChange = (event)=> {
        setValue(event.target.value)
    }
    return {
        value,
        onChange
    }
}
