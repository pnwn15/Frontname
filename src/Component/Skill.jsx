import React from 'react'

function Skill() {
    const name = "An innovative company working with the latest technologies"
  return (
    <div className='bg-yellow-500 h-auto flex justify-center'>
      <div className='grid grid-cols-1 mx-16 lg:grid-cols-2 md:grid-cols-2 my-12 gap-5'>
        <div className='text-3xl text-center text-white'>
        {name}
        </div>
        <div className=' my-3 flex justify-center'>
        <a href="#" className="bg-transparent border border-white text-white  hover:text-yellow-500 hover:bg-white py-3 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base font-normal transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      Get Quote</a>   
        </div>
      </div>
    </div>
  )
}

export default Skill
