import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    color: '',
    code: { hex: '' }
}


export const AddColor = ({ colors, updateColors }) => {
    const [addColor, setAddColor] = useState(initialState)

    const onSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('api/colors', addColor)
            .then(res => {
                console.log(res)
                updateColors([...colors, addColor])
                setAddColor({
                    color: '',
                    code: { hex: '' }
                })
            })
            .catch(err => console.log('Error adding color', err))

    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="color"></label>
            <input type="text" onChange={e => {
                setAddColor({
                    ...addColor,
                    color: e.target.value
                })
            }} value={addColor.color} />

            <label htmlFor="hex"></label>
            <input type="text" onChange={e => {
                setAddColor({
                    ...addColor,
                    code: { hex: e.target.value }
                })
            }} value={addColor.code.hex} />
            <button>Add Color</button>
        </form>
    )
}