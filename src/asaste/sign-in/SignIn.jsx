import React from 'react'

import './From.css';
const From  = () => {
  return (
    <div>
        

     <form action="" className='Fromcard  shadow-2xl rounded-2xl  '>

       <div  className='  mr-7 ml-7 text-left'>    
         <h1>Sign up</h1>
          <div className=' flex'>   
             <h3>login</h3>  <span className=' text-blue-500' >login</span>

      </div>
<div>
  <br/>

     <label >  username or email  </label>

   <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type='text'  placeholder=' mjalizi1376@gmail.com '></input>
      <br />
      <label>
        Password:
        <input className=' rounded-xl bg-slate-600 p-2 w-full mt-5 ' type="password" name="password" />
      </label>
      
      <button className='btn' type="submit">login</button>

</div>



</div>


        </form>


        
        
        
         </div>
  )
}

export default From 