import React from 'react'

function Btn({className,text}) {
  return (
    <button className ={`px-3  cursor-pointer bg-white text-black ml-3 rounded-md ${className}`}>{text}</button> 
  )
}

export default Btn
