import React from 'react'

const Form = ({heading,InputText1,InputText2, InputText3, InputText4, message,webLink, webText}) => {
  return (
    <div className='container mx-auto w-full flex flex-col justify-center items-center mb-20' >
      <div className="heading font-bold mb-5 text-2xl">
        <h1>{heading}</h1>
      </div>

      <div className="Name mb-3">
        <input className='border-3 border-gray-500 rounded-lg p-1 mr-5' type="text" placeholder={InputText1} />
        <input className='border-3 border-gray-500 rounded-lg p-1 ' type="text" placeholder={InputText2} />
      </div>

      <div className="Name mb-3">
        <input className='border-3 border-gray-500 rounded-lg p-1 mr-5' type="number" placeholder={InputText3} />
        <input className='border-3 border-gray-500 rounded-lg p-1 ' type="email" placeholder={InputText4} />
      </div>

      <div className="message flex flex-col items-center">
        <input className='border-3 border-gray-500 rounded-lg  w-102 h-30 mb-5' type="text" placeholder={message} />
        <a className='p-2 w-35 text-center font-bold bg-purple-800 text-amber-50 rounded-xl' href={webLink}>{webText}</a>
      </div>

    </div>
  )
}
export default Form
