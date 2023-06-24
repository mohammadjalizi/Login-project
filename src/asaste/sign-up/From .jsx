import React, { useState } from 'react'

import './From.css';
const From  = () => {

  const[username,setUsername]=useState('');

   const[password,setPassword]=useState('')
   const[users,setUsers]=useState([])

   const clickHaldler=(event)=>{
    event.preventDefault()
    let userInfo={
        username,
        password
    }

 


const responses=  fetch('http://localhost:8000/register',
 {
    method:'POST',
    mode:'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:JSON.stringify(userInfo)
    })
 .then(response=>console.log(response))
 userInfo={}
 
}
  return (
    <div>
        

     <form onSubmit={clickHaldler} action="" className='Fromcard my-20  shadow-2xl rounded-2xl  '>
       <br/>
       <div  className='  mr-7 ml-7 text-left'>    
         <h1>Sign up</h1>
          <div className=' flex'>  
             <h3>already a user</h3>  <span className='  cursor-pointer   hover:text-xl  ml-8   text-blue-500' >login</span>
      </div>
<div>
 

        <label  className='twoCol'>  Username  </label>
        <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' ali' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
         <br /><br/>
         <label  className='twoCol' >  Lastname  </label>
         <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' gholizade'></input>
         <br/>
          <label >  Email  </label>
          <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' ali'></input>
           <br/>
           <label>
            Password:</label>
            <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}></input>
            <br/><br/>
            <button className='btn' type="submit"  >continue</button><br/>
            
            <p>or continue with</p><br/>
            <button className='btn' type="submit">google</button>
   </div>



</div>


        </form>


        
        
        
         </div>
  )
}

export default From 