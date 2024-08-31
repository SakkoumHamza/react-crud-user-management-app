import React, { useContext,useEffect,useRef, useState } from 'react'
import { useParams } from 'react-router'
import {usersContext} from '../App'


export const UserUpdate = () => {

  const context= useContext(usersContext)
  const params = useParams()
  const [currentUser,setCurrentUser] = useState({})
  
  const nameRef= useRef()
  const countryRef= useRef()
  
    useEffect(()=>{ 
          const currentUser = context.users.filter(user=> user.id === parseInt(params.id))
          if(currentUser.length>0){
            setCurrentUser(...currentUser)
          }else { console.log("user not found")}
        }
      
      ,[])
      
    const handleSubmit = (e)=>{
      e.preventDefault()
      context.actions.updateUser({
        payload:{id:parseInt(params.id) , fullName:nameRef.current.value,country:countryRef.current.value}
        })
    }
      
  return (
    <form className='container-fluid w-75 ' onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="" className="form-label">ID</label>
          <input
            className="form-control"
            defaultValue={currentUser?.id}
            disabled={true}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Full Name</label>
          <input
            ref={nameRef}
            type="text"
            name=""
            id=""
            defaultValue={currentUser?.fullName}
            className="form-control"
            placeholder="Type name here"
            aria-describedby="helpId" required
          />
          
        </div>
        
        
          <div classNameName="mb-3">
            <label htmlFor="" className="form-label">Country</label>
            <select
              className="form-select"
              name=""
              id=""
              defaultValue={currentUser?.country}
              key={currentUser?.country}
              ref={countryRef}
              required
            >
              <option defaultValue>Select one</option>
              <option value="Maroc">Morocco</option>
              <option value="Algeria">Algeria</option>
              <option value="Tunisea">Tunisea</option>
              <option value="French hachak">French hachak</option>
            </select>
          </div>
          
        <div className="mb-3">
          <button className='btn btn-primary my-3' type='submit' >Update</button>
        </div>
    </form>
  )
}
