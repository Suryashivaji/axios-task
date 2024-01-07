import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { APL_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  let {id}=useParams()

  let navigate=useNavigate()

  let [name,setName]=useState()
  let[username,setUser]=useState()
  let[email,setEmail]=useState()
  let[address,setAddress]=useState()
  let[phone,setPhone]=useState()
  let[company,setCompany]=useState()


  const handleEdit = async()=>{

  try {
    let data ={name,username,email,address,phone,company,status:false}
    let res = await axios.put(`${APL_URL},${id}`,data)
    if(res.status===200){
      navigate('/dashboard')
     
    }
  } catch (error) {
  }
}

const  getdataBYID = async()=>{
try {
  
  let res =await axios.get(`${APL_URL},${e.id}`)
  if(res.status===2000){

    setName(res.data.name)
    setUser(res.data.username)
    setEmail(res.data.email)
    setAddress(res.data.address)
    setPhone(res.data.phone)
    setCompany(res.data.company)
  }

} catch (error) {
  

}

  }
  useEffect(()=>{
    getdataBYID()
  })

  return <>
  <Topbar/>
<div className='container-fulid'>
  <Form>
     
  <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={name} onClick={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="username" value={username} onClick={(e)=>setUser(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onClick={(e)=>setEmail(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="address" value={address} onClick={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="pnone" value={phone} onClick={(e)=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Company" value={company} onClick={(e)=>setCompany(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default Edit
