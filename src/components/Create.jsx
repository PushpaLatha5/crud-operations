import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Create() {

  const [name,setName]=useState("")
  const [email, setEmail]=useState("")
  const history=useNavigate()

const header= {"Access-Control-Allow-Origin": "*"}

  const handleSubmit=(e) => {
    e.preventDefault();
    console.log("clicked")
    axios.post(
      "https://664987e84032b1331bee26b3.mockapi.io/crud-operations",
      {name:name,
      email:email,
      header
      }
    )
    .then(()=> {
    history("/read")
  })
  }

  return (
    <>
      <form>
        <div className='d-flex justify-content-between'>
        <h1>create</h1>
        <Link to="/read">
        <button className='btn btn-primary'>Show Data</button>
        </Link>
        </div>
        <div className="mb-3">
              <label  className="form-label">Name</label>
              <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}}   />
            </div>

            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}
