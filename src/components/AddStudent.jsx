import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )
    const inputhandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue= () =>{
        console.log(data)
        axios.post(" https://courseapplogix.onrender.com/addstudents",data).then(
            (response) =>{
                console.log(response.data)
                if (response.data.status=="success") 
                    {
                    alert("successfully added")
                    
                } else {
                   alert ("error")
                    
                }
            }
        ).catch(
            
        )
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>ADD STUDENT</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row gt-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">FIRST NAME</label>
                        <input type="text" className="form-control"name='firstname'value={data.firstname}onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">LAST NAME</label>
                            <input type="text" className="form-control"name='lastname'value={data.lastname}onChange={inputhandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COLLEGE</label>
                        <input type="text" className="form-control" name='college'value={data.college}onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COURSE</label>
                        <input type="text" className="form-control"name='course'value={data.course}onChange={inputhandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">MOBILE</label>
                            <input type="text" className="form-control"name='mobile'value={data.mobile}onChange={inputhandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control"name='email'value={data.email}onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">ADDRESS</label>
                        <textarea name='address' className="form-control" value={data.address} onChange={inputhandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br />
                        <center><button className="btn btn-success"onClick={readValue}>Submit</button></center>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>            
  )
}

export default AddStudent