import React, { useContext, useRef } from 'react'
import { usersContext } from '../App'

const UserCreate = () => {
  const nameRef= useRef()
  const countryRef= useRef()
  const context = useContext(usersContext)
  
  const handleCreate = (e)=>{
      e.preventDefault()
      context.actions.addUser({
        payload:{
          id:context.lastId+1,
          fullName:nameRef.current.value, 
          country:countryRef.current.value
        }
      })
      nameRef.current.value="" 
      countryRef.current.value=""
  
    }
  return (
    <form className='container-fluid w-75 '>
      <div className="mb-3">
          <label htmlFor="" className="form-label">ID</label>
          <input
            className="form-control"
            value={context.lastId+1}
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
            className="form-control"
            placeholder="Type name here"
            aria-describedby="helpId" required
          />
          
        </div>
        
        
          <div className="mb-3">
            <label htmlFor="" className="form-label">Country</label>
            <select
              className="form-select"
              name=""
              id=""
              ref={countryRef}
              required
            >
              <option value>Select one</option>
              <option value="Maroc">Morocco</option>
              <option value="Algeria">Algeria</option>
              <option value="Tunisea">Tunisea</option>
              <option value="French hachak">French hachak</option>
            </select>
          </div>
          
        <div className="mb-3">
          <button className='btn btn-primary' onClick={handleCreate}>Create</button>
        </div>
    </form>
    
    
  )
}
export default UserCreate
