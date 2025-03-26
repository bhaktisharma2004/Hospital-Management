import React from 'react';

const Left = ({ heading, para, source1, source2, webLink, webText }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center">
      {/* Background image with low opacity */}
      <img 
        className="absolute w-full h-[90%] object-cover opacity-30 z-0" 
        src={source1} 
        alt="Background" 
      />
      
      
      <div className="container relative  z-10 flex justify-around items-center mt-25">
        {/* Left section with text and link */}
        <div className="flex flex-col space-y-15  ml-25">
          <h1 className="font-bold text-6xl w-[60%]">{heading}</h1>
          <p className="w-195  text-xl text-justify">{para}</p>
          <a 
            href={webLink} 
            className="p-2 w-25 text-center font-bold bg-purple-900 text-amber-50 rounded-xl"
          >
            {webText}
          </a>
        </div>
        

        <div>
          <img className="w-120" src={source2} alt="Content" />
        </div>
      </div>
    </div>
  );
};

export default Left;