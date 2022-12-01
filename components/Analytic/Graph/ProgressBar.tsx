import React from 'react'
interface ProgressProps{
    progress:string,
    bgColor:string
}
function ProgressBar({progress,bgColor}:ProgressProps) {
  return (
    <div className='w-96 bg-slate-50 rounded-lg ml-12 mr-12 mt-12 '>
        <div className={`h-4 w-[${progress}%] bg-${bgColor} rounded-lg text-right`}>
            <span className='p-4 text-black font-bold'></span>
        </div>
    </div>
  )
}

export default ProgressBar