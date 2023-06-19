import React from 'react'

import './From.css';
const From  = () => {
  return (
    <div>
        

     <form action="" className='Fromcard my-20  shadow-2xl rounded-2xl  '>
       <br/>
       <div  className='  mr-7 ml-7 text-left'>    
         <h1>Sign up</h1>
          <div className=' flex'>  
             <h3>already a user</h3>  <span className=' text-blue-500' >login</span>

      </div>
<div>
 

        <label >  Firstname  </label>
        <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' ali'></input>
         <br /><br/>
         <label >  Lastname  </label>
         <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' gholizade'></input>
         <br/>
          <label >  Email  </label>
          <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' ali'></input>
           <label>
            Password:</label>
            <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type="password" name="password" />
            <br/><br/><br/>
            <button className='btn' type="submit">continue</button>
            <p>or continue with</p>
            <button className='btn' type="submit">google</button>
   </div>



</div>


        </form>


        
        
        
         </div>
  )
}

export default From 