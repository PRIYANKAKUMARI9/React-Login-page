import React, { useState } from 'react';

function Logg() {
  const [logsow, setlogsow] = useState(false);

  return (
    <div className='bg-slate-400 w-[30%] flex text-center justify-center p-2'>
      <div className='form-container gap-7'>
        <div className='text-black pl-9 flex-col gap-10 justify-evenly'>
          <button className={`${logsow ? 'bg-pink-700' : ''} p-6 rounded-md`} onClick={() => setlogsow(true)} >
            Login
          </button>
          <button className={`${!logsow ? 'bg-pink-600' : ''} p-6 rounded-md`} onClick={() => setlogsow(false)}>
            Sign Up
          </button>
        </div>
        {logsow ? <>
        <div className=' text-white flex-col'>
          <h1 className=' text-white'>Loging Page</h1>
          <input type="text" className=' p-1 m-2 rounded-md bg-slate-300'  placeholder="Enter Email..." />
          <input type="text"  className=' p-1 m-2 rounded-md bg-slate-200'  placeholder="Enter Password..."/>
          <br /><a href="" className=' text-blue-700'>Forget Password ?</a>
         <br /><button className=' bg-pink-700 rounded-2xl p-2 text-white'>Login</button>
          <p>If not member ? <a onClick={()=>setlogsow(false)} href="#" className=' text-blue-700' >SignUp now</a></p>
          
        </div>
        </>: <>
        <h1 className=' text-white'>Sing Up Page</h1>
          <input type="text" className=' p-1 m-2 rounded-md bg-slate-300'  placeholder="Enter Email..." />
          <input type="text"  className=' p-1 m-2 rounded-md bg-slate-200'  placeholder="Enter Password..."/>
          <input type="text"  className=' p-1 m-2 rounded-md bg-slate-200'  placeholder="Conform Password..."/><br />
          <button className=' bg-pink-700 rounded-2xl p-2 text-white'>Sing Up</button>
        </>}
      </div>
    </div>
  );
}

export default Logg;
