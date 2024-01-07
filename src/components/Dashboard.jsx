import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import axios from 'axios'
import { APL_URL } from '../App'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  let navigate =useNavigate()


  let [data,setData]=useState([])


  const handleDelete = async(id)=>{

    try {
      let res = await axios.delete(`${APL_URL}/${id}`)
      if(res.status===200){
        getData()
      }
      
    } catch (error) {
      
    }
  }
  const getData = async()=>{
  try {
    
    let res = await axios.get(APL_URL)
    console.log(res);
    if(res.status===200){
      setData(res.data)
    }
  } catch (error) {
    
  }


  }

  useEffect(()=>{
getData()
  },[])

  return <>
  
  <Topbar></Topbar>
  <h1>Dashboard</h1>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
       {
        data.map((e,i)=>{

          return<tr key={i}>
               <td>{i+1}</td>
               <td>{e.name}</td>
               <td>
                {e.username}
               </td>
               <td>
              {e.email}
               </td>
           
               <td>{e.phone}</td>
              
               <td>
                <Button variant='info' onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
             &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
               </td>
          </tr>

        })
      } 
      </tbody> 
</Table>
</>
}

export default Dashboard
