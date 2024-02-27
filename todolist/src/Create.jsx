import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import("./App.css")
export default function () {
    const [task, setTask] = useState()
    const handleAdd = () => {

        axios.post(" http://localhost:8000/add", { task: task })
            .then(result => console.log(result))
            .catch(err => console.log(err))

    }
    return (
        <div className="input">
            <input type="text" name="" className="input" id="" placeholder='Enter the Task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" className="button" onClick={handleAdd}>Add</button>
        </div>
    )
}
