import React from 'react';
import Lounge from '../assets/Lounge.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={Lounge}
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Allow us to show you</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Abuja At It's Best!
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            The villas, the people, the night life</p>
          <button className='bg-white text-black '>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;