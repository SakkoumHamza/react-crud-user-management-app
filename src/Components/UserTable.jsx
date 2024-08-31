import React, { useContext, useEffect, useState } from 'react'
import { usersContext } from '../App'
import { Link } from 'react-router-dom'

const UserTable = () => {

    const context=  useContext(usersContext)
    
  return (<div className='container-fluid w-75'>
            <table
                class="table table-striped table-hover table-borderless table-primary align-middle  "
            >
                <thead class="table-light">
                    
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                
                        {
                            context.users.length > 0 ?
                            context.users.map((user,key)=>{ 
                            return  (<tr key={key}>
                                        <td scope="col">{user.id}</td>
                                        <td scope="col">{user.fullName}</td>
                                        <td scope="col">{user.country}</td>
                                        <td scope="col">
                                            <Link  to={`user/${user.id}/update`} type="button" className="btn btn-success ms-2" >Update</Link>
                                            <Link  to={`user/${user.id}/delete`} type="button" className="btn btn-danger ms-2" >Delete</Link>
                                        </td>
                                    </tr> )  })
                        :
                            <td colSpan={"4"} align={'center'}>No user found</td>
                        }
                        
                
                </tbody>
                
            </table>
        </div>

  )
}

export default UserTable