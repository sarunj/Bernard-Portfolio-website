import React from 'react';
import Model3D from './Model3D';
// import img_3D from '/redheart.png';

const Home = () => {
  return (
    <div className='homepage-container'>
      <div className='items-center justify-left py-4 pl-5 my-6 bg-transparent'>  
        <h1 className='font-mono font-bold md:text-4xl lg:text-6xl text-2xl text-left'>Hello, Im Bernard</h1>
        <h2 className='font-mono font-bold text-base md:text-2xl text-left'>A French sculptor blending nature and society to provoke thought and invite interaction through my art.</h2>
        
        <p className='font-mono font-bold text-sm md:text-xl text-left'>I create sculptures and art pieces for private and' public spaces.</p>

      </div>

      {/* <div className='items-center justify-items-end p-4 h-[600px] w-[400px] border-2 border-red-500 bg-gray-300'>
        <img src='images/redheart.png' alt='3D' className='rounded-2xl bg-center bg-cover duration-500'/>
      </div> */}
      <Model3D /> 

    </div>
  )
}


export default Home