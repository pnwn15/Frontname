import React from 'react'

function Gg() {
    const namehead = "We are expert in this field since almost 20 years."

  return (
    <div className='bg-white w-full h-auto flex justify-center '> 
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  lg:mx-24 my-24 mx-5'>
      <div className='flex flex-col gap-7'>
    <div className='left-0 text-black text-4xl flex-wrap '>
        {namehead}
    </div>
    <div className='left-0 text-black text-sm flex-wrap '>
        <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, <br /> 
        lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis <br /> 
        sem nibh id elit duis sed odio sit nibh vulputate cursus a sit <br />
        amet mauris morbi accumsan.</p>
    </div>
      </div>
      <div className="flex flex-col gap-7 w-full max-w-md ">
  {/* Progress Bar 1 */}
  <div className="flex flex-col">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">Buildings</span>
      <span className="text-sm font-medium text-gray-700">85%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div
        className="bg-yellow-500 h-1 rounded-full"
        style={{ width: "85%" }}
      ></div>
    </div>
  </div>

  {/* Progress Bar 2 */}
  <div className="flex flex-col">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">Architecture60%</span>
      <span className="text-sm font-medium text-gray-700">60%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div
        className="bg-yellow-500 h-1 rounded-full"
        style={{ width: "60%" }}
      ></div>
    </div>
  </div>

  {/* Progress Bar 3 */}
  <div className="flex flex-col">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">Constructions</span>
      <span className="text-sm font-medium text-gray-700">70%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div
        className="bg-yellow-500 h-1 rounded-full"
        style={{ width: "70%" }}
      ></div>
    </div>
  </div>

  {/* Progress Bar 4 */}
  <div className="flex flex-col">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">Planning</span>
      <span className="text-sm font-medium text-gray-700">40%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div
        className="bg-yellow-500 h-1 rounded-full"
        style={{ width: "40%" }}
      ></div>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Gg
