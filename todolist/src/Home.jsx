import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Create from './Create'
import('./App.css')
function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get(" http://localhost:8000/add").then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [todos])
    return (
        <>
            {/* <h2 className="home"> Todo Application</h2>
            <Create />
            {todos.length === 0 ?
                <div ><h2 className="first">No Records</h2></div> :

                <div> {todos.map((task) => (
                    <div className="table" >
                        <table className="tabledata" >
                            <tr key={task._id} className="data"> {task.task}</tr>
                        </table>
                    </div>
                ))}  </div >
            } */}

            <h2 className="home"> Todo Application</h2>
            <Create />

            {todos.length === 0 ? (
                <div><h2 className="first">No Records</h2></div>
            ) : (
                <div className="table">
                    <table className="tabledata">
                        <tbody>
                            {todos.map((task) => (
                                <tr key={task._id} className="data">
                                    <td>{task.task}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Home