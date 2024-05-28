import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Update() {
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const navigate=useNavigate();

    useEffect(()=> {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate=(e)=> {
        e.preventDefault()
        axios.put(`https://664987e84032b1331bee26b3.mockapi.io/crud-operations/${id}`,
        {
            name:name,
            email:email,
        }
    ).then(()=> {
        navigate("/read")
    })
    }

  return (
    <>
    <h1>Update</h1>
      <form>
        <div className="mb-3">
              <label  className="form-label">Name</label>
              <input type="text" className="form-control"
              value={name} 
              onChange={(e)=>{setName(e.target.value)}}   
              />
            </div>

            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input type="email" className="form-control" 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}} 
              />
            </div>
            
            <button type="submit" className="btn btn-primary mx-2" 
            onClick={handleUpdate}>Update</button>

        <Link to="/read">
        <button  className="btn btn-primary mx-2" 
            >Back</button>
        </Link>
            

            
    </form>
    </>
  )
}
