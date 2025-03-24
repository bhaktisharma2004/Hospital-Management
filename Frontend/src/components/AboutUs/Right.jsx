import React from 'react';

const Left = ({ heading1, heading2, para, para2, source }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center">
      {/* Background image with low opacity */}
      
      
      {/* Content container */}
      <div className="container relative z-10 flex justify-around items-center mt-10">
        {/* Left section with text and link */}
        <div className="flex flex-col space-y-5 ml-25">
          
          <img className="w-120" src={source} alt="Content" />
        </div>
        
        {/* Right section with image */}
        <div className='flex flex-col space-y-5 ml-25'>
          <h3>{heading1}</h3>
        <h1 className=" text-3xl w-[60%]">{heading2}</h1>
          <p className="w-150 text-justify">{para}</p>
          <p className="w-150 text-justify">{para2}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Left;