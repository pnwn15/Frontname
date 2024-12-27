import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="public/assets/engine.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4">
      We’re Building Your Future
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-white mb-8">
      Take a step towards the future of construction with Cobuild
    </p>
    <a
      href="#"
      className="bg-yellow-400 text-white hover:bg-slate-800 py-3 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      Get Quote
    </a>
  </div>
</div>

  );
}

export default Hero;
