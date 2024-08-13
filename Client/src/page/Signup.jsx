import React, { useState } from 'react'

const Signup = () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  //Handling the input values
   const HandleInput=(e)=>{
    const { name, value } = e.target;
    console.log(e.target.value)
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
   }
   //Form Submitted 

   const HandlerSubmit =(e)=>{
     e.preventDefault();
     alert(user);
     
   }
  return (
    <div className='text-white text-2xl'>
      <section>
        <main>
          <div className='flex items-center justify-center my-5   text-3xl '>
            <div className='text-white  mr-[30rem] border-2 border-yellow-200 border-solid '>
               <img src="Images/register.png"  alt="Register Image" width={`400`} height={`500`} />
            </div>
    
            <div className=' text-[var(--primary-color)]'>
            <div className='text-6xl flex items-center justify-center shadow-lg '>
  <h1>Sign Up form</h1>
</div>

    <br />
            <form onSubmit={HandlerSubmit}>
  <div className="grid grid-flow-row gap-16 w-[500px] bg-black  p-6">
    <div className="flex flex-col">
      <label htmlFor="username" className="mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter Your name"
        id='username'
        name="username"
        required
        autoComplete='off'
        value={user.username}
        onChange={HandleInput}
        className="p-2  bg-gray-800 text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white border-[1px] shadow-2xl shadow-purple-800 "
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2">Email</label>
      <input
        type="text"
        placeholder="Enter Your email"
        name="email"
        id='email'
        required
        autoComplete='off'
        value={user.email}
        onChange={HandleInput}
        className="p-2 bg-gray-800 text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white border-[1px] shadow-2xl shadow-purple-800"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="  mb-2">Phone</label>
      <input
        type="text"
        placeholder="Enter Your phone number"
        id='phone'
        name="phone"
        required
        autoComplete='off'
        value={user.phone}
        onChange={HandleInput}
        className="p-2 bg-gray-800 text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white border-[1px] shadow-2xl shadow-purple-700"
      />
    </div>
      
    <div className="flex flex-col">
      <label htmlFor="password" className=" mb-2">Password</label>
      <input
        type="password"
        placeholder="Enter Your password"
        id='password'
        name='password'
        required
        autoComplete='off'
        value={user.password}
        onChange={HandleInput}
        className="p-2 bg-gray-800 text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white border-[1px] shadow-2xl shadow-purple-700"
      />
    </div>
    <div>
      <input type="submit" value={`SIGN UP`} className='bg-gray-800 p-4 rounded-xl border-[1px] shadow-2xl shadow-purple-800   w-[14rem] cursor-pointer hover:text-[var(--secondary-color)]'  />
    </div>
  </div>
  
</form>

            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Signup;
