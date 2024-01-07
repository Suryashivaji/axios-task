import React, { useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { APL_URL } from '../App';
import { useNavigate } from 'react-router-dom';

function Create() {

  let navigate=useNavigate()

  let [name,setName]=useState()
  let[username,setUser]=useState()
  let[email,setEmail]=useState()
  let[address,setAddress]=useState()
  let[phone,setPhone]=useState()
  let[company,setCompany]=useState()


  const handleCreate = async()=>{

  try {
    let data ={name,username,email,address,phone,company,status:false}
    let res = await axios.post(APL_URL,data)
    if(res.status===201){
      navigate('/')
     
    }
  } catch (error) {
    
  }
  }

  return <>
  <Topbar/>
<div className='container-fulid'>
  <Form>
     
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="username" onChange={(e)=>setUser(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="address" onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="pnone" onChange={(e)=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Company" onChange={(e)=>setCompany(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleCreate()}>
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default Create
