import React from 'react'

const Contactus = () => {
  return (
    <div classNxame='text-white text-2xl'>
      <section>
        <main>
          <div className='flex items-center justify-center my-5   text-3xl '>
            <div className='text-white  mr-[30rem] border-2 border-yellow-200 border-solid '>
               <img src="Images/register.png"  alt="Register Image" width={`400`} height={`500`} />
            </div>
    
            <div className=' text-[var(--primary-color)]'>
            <div className='text-6xl flex items-center justify-center shadow-lg '>
  <h1>Contact Us form</h1>
</div>

    <br />
            <form action="">
  <div className="grid grid-flow-row gap-16 w-[500px]  bg-black  p-6">
    <div className="flex flex-col">
      <label htmlFor="username" className="mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter Your name"
        id='username'
        required
        autoComplete='off'
        className="p-2  bg-gray-800 h-[45px] text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white "
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="mb-2">Email</label>
      <input
        type="text"
        placeholder="Enter Your email"
        id='email'
        required
        autoComplete='off'
        className="p-2 bg-gray-800  h-[45px]   border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="  mb-2">Phone</label>
      <input
        type="text"
        placeholder="Enter Your phone number"
        id='phone'
        required
        autoComplete='off'
        className="p-2 bg-gray-800 h-[45px] text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white "
      />
    </div>
      
    <div className="flex flex-col">
      <label htmlFor="message" className=" mb-2">Message</label>
      <textarea
        type="message" 
        placeholder="Enter Your password"
        id='password'
        required
        autoComplete='off'
      
        className="p-2 bg-gray-800 h-[45px] text-white  border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-white "
      />
    </div>
    <div>
      <input type="button" value={`SEND`} className='bg-gray-800 p-4 rounded-xl   w-[14rem] cursor-pointer hover:text-[var(--secondary-color)]'  />
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

export default Contactus;
