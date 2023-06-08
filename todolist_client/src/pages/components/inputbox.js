import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '@/redux/action';


const inputbox = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()



  function onFormSubmit(e) {

    e.preventDefault();

    console.log("I am here")

    dispatch(addNewTodo(text));
    console.log("I am here too")

    setText("");
  }

  function onInputChange(e) {

    setText(e.target.value);




  }


  return (
    <form className='flex w-full  lg:w-2/3 items-center justify-center  bg-opacity-50 mb-5 mt-36 md:mt-80 md:mb-32 lg:mt-28 lg:mb-10 ' onSubmit={onFormSubmit}>

      <input className=" border rounded-md   focus:outline-white-50   bg-white bg-opacity-0 placeholder-opacity-50 border-white text-left w-[360px] lg:w-4/5 md:w-2/3  md:outline-white h-8 text-white  placeholder-white" type="text" value={text} placeholder="Work to be done" onChange={onInputChange} />


    </form>
  )
}

export default inputbox;


