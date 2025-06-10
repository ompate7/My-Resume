import React from 'react'
import '../style/Loading.css';

const Loading = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/w8.jpg')", filter: "blur(10px)" }}></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="rounded-full overflow-hidden h-56 w-56">
          <img src="/Om.jpg" alt="Loading" className="object-cover w-full h-full" />
        </div>
        <br />
        <h1 className='text-3xl font-semibold text-white'>Om Patel</h1>
        <div className="windows-loader">
          <div className="loader mt-4"></div>
        </div>
        <h1 className='mt-4 text-2xl text-white'>Welcome</h1>
      </div>
    </div>
  )
}

export default Loading
