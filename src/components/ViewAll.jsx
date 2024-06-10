import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, setData]=useState([])
    
        
    const fetchData =()=>{
        axios.get(" https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response) => {
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>VIEW STUDENT</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">First NAME</th>
      <th scope="col">Last NAME</th>
      <th scope="col">COLLEGE</th>
      <th scope="col">DOB</th> 
      <th scope="col">COURSE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  {data.map(
    (value, index)=>{
        return <tbody>
        <tr>
          <td>{value.firstname}</td>
          <td>{value.lastname}</td>
          <td>{value.college}</td>
          <td>{value.dob}</td>
          <td>{value.course}</td>
          <td>{value.mobile}</td>
          <td>{value.email}</td>
          <td>{value.address}</td>
        
        </tr>
        
      </tbody>
    }
  )}
</table>
 
               </div>
            </div>
        </div>
    </div>
    

  )
}

export default ViewAll