import React from 'react'

function ClicksCard() {
  return (
    <div className='border border-gray-500 rounded-xl   mt-4'>

      <div className="px-4 py-2 border-b border-gray-500"><h1 className="text-lg font-semibold w-fit">Forecasted Results</h1></div>
      <div className='px-4 py-2 border-b border-gray-500 flex flex-col'><p className=' border-b border-dashed border-gray-500 w-fit text-gray-500'>Target audience size</p><span className='text-xl font-semibold text-black'>91,000,000+</span></div>

      <div className='px-8 py-2  flex flex-col gap-8'>
        <div className=''><p className='text-gray-500 border-b border-dashed border-gray-500 w-fit'>Total Spend</p><span className='text-xl font-semibold'>57,000.00 <span className='ml-1 mr-1'>-</span>120,013.00</span><span className='ml-2 text-blue-600 text-lg font-semibold'>Points</span></div>
        <div className=''><p className='text-gray-500 border-b border-dashed border-gray-500 w-fit'>Total Impressions</p> <span className='text-xl font-semibold'>69,000<span className='ml-1 mr-1'>-</span>190,000</span></div>
        <div className=''><div className='flex gap-4'><p className='text-gray-500 border-b border-dashed w-fit border-gray-500'>Total Hours</p> <button className='bg-blue-600 rounded-lg text-white font-semibold w-fit h-fit p-1'>Key Result</button></div><span className='text-xl font-semibold'>900</span></div>
        <div className=''><p className=''>Forecasted results are directional estimates and do not guarantee performance. <span className='text-blue-600 font-semibold'>Learn more</span></p></div>
      </div>
    </div>
  )
}

export default ClicksCard