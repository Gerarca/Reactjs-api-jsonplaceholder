import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsTask(){

    const params = useParams();

    const [task, SetTask] = useState({});

    const getTask = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10');
            const responceSliced = response.data.slice(0,10);
            const resp = responceSliced.filter( task => task.id == params.id );
            SetTask( resp );
        } catch (error) {
            console.log("Axios error: ", error)
        }
    }

    useEffect(()=>{
        getTask();
    }, [])

    return(
        <div className="flex mt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto bg-slate-50 rounded">        
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{task[0]?.title}</div>
                    <p className="text-gray-700 text-base">
                        {task[0]?.title}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 w-full flex">
                    <Link to="/task" className="m-auto bg-blue-500 rounded hover:bg-blue-400 p-2">Ir Atras</Link>
                </div>
            </div>
        </div>
    )
}
