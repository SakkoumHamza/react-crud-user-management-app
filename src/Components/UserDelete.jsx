import React from 'react'
import { useParams, } from 'react-router'
import {usersContext} from '../App'
import { useContext } from 'react'

 const UserDelete = () => {
  const context = useContext(usersContext)
  const params = useParams()
  const handleDelete = (e) => {
      e.preventDefault()
      context.actions.deleteUser({
          payload: {
              id: params.id
          }
      })
  }
  return (
      <div className='container-fluid w-75'>
          <h1>Do you want to delete this user</h1>
          <div className="alert alert-danger " role="alert">
              <strong>danger</strong> Deletion is irreversible (you can't go back)
          </div>
          <button className="btn btn-danger" type="submit" onClick={handleDelete}>DELETE</button>
      </div>
  )
  }

export default UserDelete
