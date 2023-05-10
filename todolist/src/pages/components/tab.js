import React from 'react'

const tab = () => {
  return (
    <div  className='flex w-full items-center justify-center mt-2 gap-2'>
        <button className='bg-green-200 shadow-sm p-2 text-white rounded-md '> All Work</button>
        <button className='bg-green-200 shadow-sm p-2 text-white rounded-md '> Active Work</button>
        <button className='bg-green-200 shadow-sm p-2 text-white rounded-md '> Works Done</button>

    </div>
  )
}

export default tab