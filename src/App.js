import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
const App = () => {

  const[users,setUsers]=useState([])
  const[findUsers,setFindUsers]=useState([])
  useEffect(()=>{
    (async()=>{
      let data;
      try{
      const res=await fetch('https://randomuser.me/api/?results=10')
      data=(await res.json()).results
      }catch(error){
        console.log(error);
        data=[]
      }
      console.log(data);
      setFindUsers(data)
      setUsers(data)
      console.log(users);

      
    })()
  },[])
  const inputHandle=(e)=>{
const value=e.target.value.toLowerCase();
const filterIt=findUsers.filter((user)=>(`${user.name.first}${user.name.last}`.toLowerCase().includes(value)))
setUsers(filterIt)

  }


  return (
    <div className='App'>
      <h1>Social Card</h1>
      <input placeholder='search' className='inputBox' onChange={inputHandle}/>
      <div className='container'>
        {
          users.map((user,index)=>(
            <Card cardData={user} key={index}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default App