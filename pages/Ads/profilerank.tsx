import { useRouter } from 'next/router'
import React from 'react'
import ClicksCardProfile from './ClickCard/ClicksCardProfile'
function profilerank() {
    const router = useRouter()
    return (
        <div className='  px-6 pb-4 md:px-4 lg:px-12'>
            <h1 className='text-6xl font-semibold text-blue-600 ml-12 mt-12'>Profile Ads</h1>
            <div className="flex flex-col md:flex-row">
                <div className=' lg:w-[70%] md:w-[80%] flex flex-col gap-2 md:ml-12 p-8'>
                    <div className='flex flex-col gap-2'>
                        <h1>Landing page URL</h1>
                        <input type="text" className='md:w-[80%] lg:w-[70%] rounded-lg border-2 border-gray-600 p-1' />
                    </div>


                    <div className='flex flex-col gap-2'>
                        <h1>No.of Clicks</h1>
                        <input type="number" className='md:w-[80%] lg:w-[70%] rounded-lg border-2 border-gray-600 p-1' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1>Place</h1>
                        <input type="text" className='md:w-[80%] lg:w-[70%] rounded-lg border-2 border-gray-600 p-1' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1>From when to start sending</h1>
                        <div className='flex gap-12 md:w-[80%] lg:w-[70%]'>
                            <input type="time" className='md:w-[60%] lg:w-[50%]  rounded-lg border-2 border-gray-600 p-1' />
                            <input type="date" className='md:w-[60%] lg:w-[50%]  rounded-lg border-2 border-gray-600 p-1' />
                        </div>
                    </div>

                    <div className='justify-center text-center items-center mt-12'><button className='rounded-lg text-white bg-blue-600 w-fit h-fit px-4 py-2' onClick={() => router.push("/job/Ads/atmcard")}>Submit</button></div>
                </div>
                <div className='md:w-[80%] lg:w-[50%]  mt-12'>
                    <ClicksCardProfile />
                </div>
            </div>
        </div>
    )
}

export default profilerank