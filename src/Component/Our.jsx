import React from 'react'
import excavatorIcon from "../assets/handshake-solid.svg";
import truck from "../assets/truck-fast-solid.svg";
import solid from "../assets/truck-solid.svg";
import car from "../assets/car-solid.svg";

function Our() {
    const name = "Our Services"
    const icons = [
        { src: excavatorIcon, label: "Excavator", label1: "Cobuild impresses you with fully responsiveness and highly ",label2: "customization." },
        { src: truck, label: "Excavator",label1: "Cobuild impresses you with fully responsiveness and highly ",label2: "customization." },
        { src: solid, label: "Excavator",label1: "Cobuild impresses you with fully responsiveness and highly ",label2: "customization." },
        { src: car, label: "Excavator",label1: "Cobuild impresses you with fully responsiveness and highly ",label2: "customization." },
       
      ];

  return (
    <div className='bg-white w-full h-auto flex justify-center'>
      <div className='flex container justify-center my-24'>
        <div className='flex flex-col flex-wrap space-y-11'>
        <div className='text-black text-4xl text-center '>
            <h1>{name}</h1>
        </div>
        <div className='text-black text-sm text-center'>
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan <br /> ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
        </div>
        <div className="grid mx-6  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
  {icons.map((icon, index) => (
    <div key={index} className="flex flex-col items-center space-y-5">
      <img src={icon.src} alt={icon.label} className="w-16 h-16 mb-2" />
      <p className="text-center text-sm font-semibold text-gray-800">
        {icon.label}
      </p>
      <p className="text-center text-sm font-medium text-gray-400">
        {icon.label1} <br />
        {icon.label2}
      </p>
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  )
}

export default Our
