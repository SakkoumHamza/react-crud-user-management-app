import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Routes} from 'react-router-dom';

import { createContext, useState } from 'react';
import {Route } from 'react-router'
import UserDelete from './Components/UserDelete.jsx'
import UserCreate from "./Components/UserCreate.jsx"
import UserTable from "./Components/UserTable.jsx"

import {UserUpdate} from "./Components/UserUpdate.jsx"
import Navbar from './Components/Navbar.jsx';

export const usersContext = createContext({
  users:[],
  lastId:0,
  addUser:()=> null,
  updateUser:()=> null,
  deleteUser:()=>null
})

function App() {

  const [users,setUsers] = useState([])
  const [lastId,setLastId]= useState(0)
  
  const addUser = (data) => {
    setUsers(prevState => [...prevState, data.payload])
    setLastId(prevState => prevState + 1)
    window.history.back()
}
  const updateUser = (data) => { 
    const {id,...rest}=data.payload
    setUsers( prevState => prevState.map ( user => { if(user.id === id){ return {id:user.id,...rest} }
              return user }))
              
    window.history.back()
}
                                
  const deleteUser = (data) => {
    setUsers(prevState => prevState.filter(user  => user.id !== parseInt(data.payload.id)))
    window.history.back()
}
    
  return (
    <usersContext.Provider value={{ users:users, lastId:lastId ,actions: {addUser,updateUser,deleteUser} }}>
      <BrowserRouter>
        
          <Navbar/>
          <Routes>
            <Route index      element={<UserTable />}/>
            <Route path="user/create" element={<UserCreate />} />
            <Route path="user/:id/update" element={<UserUpdate/>} />
            <Route path="user/:id/delete" element={<UserDelete/>} />
          </Routes>
          
      </BrowserRouter>
    </usersContext.Provider>
  );
}

export default App;
