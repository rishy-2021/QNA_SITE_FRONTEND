import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
function AdsAccount() {
  const router = useRouter()
  return (
    <div className=' mt-4 px-12'>


      <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">S.No</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Types of Ads</th>
            <th className="p-3 text-lg font-semibold tracking-wide text-left">Paid</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Impressions</th>
            <th className="p-3 text-lg font-semibold tracking-wide text-left">Clicks</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Delete</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Close Ad</th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td className='p-3 text-sm text-gray-700'>1</td>
            <td className='p-3 text-sm text-gray-700'>Message Ads</td>
            <td className='p-3 text-lg font-semibold text-gray-700'>4000</td>
            <td className='p-3 text-sm text-gray-700'>5000</td>
            <td className='p-3 text-sm font-semibold text-gray-700'>900</td>
            <td className='p-3 text-sm text-gray-700'><button className='p-1.5 bg-yellow-500 rounded-lg text-white'>Delete</button></td>
            <td className='p-3 text-sm text-gray-700'><button className='p-1.5 bg-yellow-500 rounded-lg text-white'>Close</button></td>
          </tr>
          <tr className='bg-gray-50'>
            <td className='p-3 text-sm text-gray-700'>2</td>
            <td className='p-3 text-sm text-gray-700'>Profile Ads</td>
            <td className='p-3 text-sm text-gray-700'>4000</td>
            <td className='p-3 text-sm text-gray-700'>5000</td>
            <td className='p-3 text-sm text-gray-700'>900</td>
            <td className='p-3 text-sm text-gray-700'><button className='p-1.5 bg-yellow-500 rounded-lg text-white'>Delete</button></td>
          </tr>
          <tr className='bg-whitebg-white'>
            <td className='p-3 text-sm text-gray-700'>3</td>
            <td className='p-3 text-sm text-gray-700'> Ads</td>
            <td className='p-3 text-sm text-gray-700'>4000</td>
            <td className='p-3 text-sm text-gray-700'>5000</td>
            <td className='p-3 text-sm text-gray-700'>900</td>
            <td className='p-3 text-sm text-gray-700'><button className='p-1.5 bg-yellow-500 rounded-lg text-white'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdsAccount