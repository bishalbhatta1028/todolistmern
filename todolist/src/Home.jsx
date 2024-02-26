import React from 'react'
import { useState } from 'react'
import Create from './Create'
import('./App.css')
function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2 className="home"> Todo Application</h2>
            <Create />
            {todos.length === 0 ?
                <div ><h2 className="first">No Records</h2></div> :
                todos.map(todo => {
                    <div>{todos} </div >
                })
            }</div>
    )
}

export default Home