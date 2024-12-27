import React, { useState } from "react";

function Feature() {
    const [activeTab, setActiveTab] = useState("tab1");
    const name = "Featured Work"
    const tabs = [
        { id: "tab1", label: "All/"},
        { id: "tab2", label: "Building/" },
        { id: "tab3", label: "Construction/" },
        { id: "tab4", label: "Planning" },
      ];
      const images = [
        "public/assets/1.jpg",
        "public/assets/2.jpg",
        "public/assets/3.jpg",
        "public/assets/4.jpg",
        "public/assets/5.jpg",
        "public/assets/6.jpg",
      ];
      const image = [
        "public/assets/1.jpg",       
        "public/assets/5.jpg",
      ];
      const image1 = [
        "public/assets/2.jpg",       
        "public/assets/4.jpg",
      ];
      const image2 = [
        "public/assets/3.jpg",       
        "public/assets/6.jpg",
      ];
  return (
    <div className='h-auto bg-slate-200 flex justify-center'>
      <div className='flex container py-20 justify-center'>
        <div className='flex flex-col flex-wrap space-y-11'>
        <div className='text-black text-4xl text-center'>
            <h1>{name}</h1>
        </div>
        <div className='text-black text-sm text-center'>
            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan <br /> ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
        </div>
        <div className="w-full max-w-full mx-auto">
      {/* Tab Headers */}
      <div className="flex border-b justify-center border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "tab1" && (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
         {images.map((image, index) => (
           <img
             key={index}
             src={image}
             alt={`รูปที่ ${index + 1}`}
             className="w-full h-auto"
           />
         ))}
       </div>
        )}
        {activeTab === "tab2" && (
          <div className="grid px-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {image1.map((image1, index) => (
            <img
              key={index}
              src={image1}
              alt={`รูปที่ ${index + 1}`}
              className="w-full lg:w-full  h-auto"
            />
          ))}
        </div>
        )}
        {activeTab === "tab3" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {image.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`รูปที่ ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        )}
        {activeTab === "tab4" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {image2.map((image2, index) => (
            <img
              key={index}
              src={image2}
              alt={`รูปที่ ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        )}
      </div>
    </div>
  
      </div>
    </div>
    </div>
  )
}

export default Feature
