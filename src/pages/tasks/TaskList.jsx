import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TaskList(){
    
    const [taskList, SetTasksList] = useState({});

    const getTasks = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10');
            SetTasksList(response.data.slice(0,10));
        } catch (error) {
            console.log("Axios error: ", error)
        }
    }

    useEffect(()=>{
        getTasks();
    }, [])

    const checkChange = (id) => { 
        const newList = taskList.map((task) =>{
            if(task.id === id){
                return({
                    ...task, completed: !task.completed 
                })
            }else{
                return task
            }
        })
        SetTasksList(newList)
    }

    const deleteTask = (id) => {
        const newList =  taskList.filter((task)=>{
                            if(task.id === id){}
                            else{
                                return task;
                            }
                        })
        SetTasksList(newList)
    }

    return(
        <div className="flex mt-10"> 
            <div className="mx-auto w-full">
                <table className="w-11/12 rounded text-left text-gray-500 dark:text-gray-400 mx-auto">
                    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3 text-center">ID</th>
                            <th className="px-6 py-3 text-left">Title</th>
                            <th className="px-6 py-3 text-left">Descripcion</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            taskList.length > 0 ?
                            taskList.map( (task) =>{
                                return(
                                    <tr className={`hover:bg-slate-200 py-10 ${task.completed? "bg-red-200" : ""} ${(task.id)%2!=0? "border-b border-t" : "" }`} key={task.id}>
                                        <td className="text-center px-6 py-3 w-px">{task.id}</td>
                                        <td className="px-6 py-3">{task.title}</td>
                                        <td className="px-6 py-3">{task.title}</td>
                                        <td className="justify-center items-center">
                                            <div className="container grid grid-cols-3 content-center">
                                                <Link
                                                    to={`/task/${task.id}`}
                                                    className="bg-blue-500 rounded p-1 w-20 text-slate-900 text-xs text-center"
                                                >
                                                    Detalles
                                                </Link>
                                                <input 
                                                    className="m-auto w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    type="checkbox" 
                                                    defaultChecked={task.completed}
                                                    onClick={()=>checkChange(task.id)}
                                                />
                                                <button 
                                                    className="bg-red-500  p-1 w-20 rounded text-slate-900 text-xs"
                                                    onClick={()=>deleteTask(task.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
  
                                        </td>
                                    </tr>
                                )
                            })
                            :
                                null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}