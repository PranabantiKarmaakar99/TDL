import React from 'react'

const searchbar = () => {
  return (
        <div className='flex w-full items-center justify-center  mt-5'>

    <input className=" rounded-full  focus:outline-pink-50  bg-white  bg-opacity-25 border-gray-200 text-right h-10 placeholder-white w-4/5"  type="text" placeholder="Search" />


    </div>
  )
}

export default searchbar