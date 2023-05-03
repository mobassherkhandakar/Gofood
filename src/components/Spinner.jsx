import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-60px)]'>
      <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
    </div>
  )
}

export default Spinner