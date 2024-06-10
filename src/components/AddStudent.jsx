import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data, setData]=useState(
        {
            "fname":"",
            "lname":"",
            "clg":"",
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
                        <input type="text" className="form-control"name='fname'value={data.fname}onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">LAST NAME</label>
                            <input type="text" className="form-control"name='lname'value={data.lname}onChange={inputhandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COLLEGE</label>
                        <input type="text" className="form-control" name='clg'value={data.clg}onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COURSE</label>
                        <select name='course' className="form-control" value={data.course} onChange={inputhandler}>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="Btech">Btech</option>
                                <option value="Mtech">Mtech</option>
                                <option value="Other">Other</option>
                            </select>

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