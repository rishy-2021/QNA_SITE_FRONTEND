import React from 'react'

function AtmCard() {
  return (
    <div className='fixed inset-0 w-full flex justify-center items-center'>
      <div className=' bg-gradient-to-r from-[#EC77AB] to-[#7873F5] w-[550px] p-4 h-[350px] relative rounded-lg'>
        <div className='flex pt-6 pl-4'>
          <img src="/person.jpg" alt="" className='rounded-full w-8 h-8 mt-1 object-cover mr-2' />
          <h1 className='text-3xl  text-white font-semibold'>Adarsh Rathi</h1>
        </div>
        <p className='text-white mt-8 w-[80%]  text-lg ml-4'>Your Amount is being deducting for the purpose you selected</p>
        {/* <p className='absolute right-4 top-2 text-white text-lg font-semibold p-4'>7000</p> */}
        <div className='absolute bottom-4 right-12 top-8'>
          <p className='text-sm text-white font-semibold'>Balance</p>
          <p className='text-3xl font-semibold   text-white '>6789</p>
        </div>
        <div className='absolute bottom-8 left-8 '>
          <p className='text-xl text-white font-semibold'>Deducted</p>
          <p className='text-5xl font-semibold   text-white '>6789</p>
        </div>

        <p className='absolute bottom-8 right-8 flex gap-10'><button className='bg-green-400 px-4 py-2 rounded-lg'>Accept</button> <button className='bg-red-400 px-4 py-2 rounded-lg'>Decline</button></p>
      </div>
    </div>
  )
}

export default AtmCard