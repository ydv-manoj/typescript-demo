"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
    const router=useRouter();
    const handleClick=()=>{
        router.push('/')
    }
  return (
    <div>
        <button onClick={handleClick} className='btn btn-secondary'>Create</button>
    </div>
  )
}

export default NewUser