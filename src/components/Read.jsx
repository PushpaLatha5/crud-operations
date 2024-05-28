import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Read() {
    const [data,setData]=useState([])
    const [tabledark , setTableDark]=useState("")

    useEffect(()=>{
        getData()
    },[])

    function getData() {
        axios.get("https://664987e84032b1331bee26b3.mockapi.io/crud-operations")
        .then((res)=> {
            console.log(res.data)
            setData(res.data)
        })
    }

   const handleDelete=(id)=> {
        axios.delete(`https://664987e84032b1331bee26b3.mockapi.io/crud-operations/${id}`
        ).then(()=> {
            getData()
        })
    }


    const setToLocalStorage=(id, name,email)=> {
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
  
  return (
    <>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={()=> {
            if(tabledark === "table-dark")  setTableDark("")
            else setTableDark("table-dark")
        }
        } />
        <label className="form-check-label" ></label>
        </div>
       <div className='d-flex justify-content-between'>
        <h1>Read Operation</h1>
        <Link to="/">
        <button className='btn btn-secondary'>Create</button>
        </Link>
        </div>
      <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData)=> {
        return (
            <>
             <tbody>
                <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                    <Link to="/update">
                    <button className='btn btn-success' onClick={()=>setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                    )}
                    >Edit</button>
                    </Link>
                    
                </td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(eachData.id)}}>Delete</button></td>
                </tr>
            </tbody>
            </>
        )
    })
   }
</table>
    </>
  )
}
