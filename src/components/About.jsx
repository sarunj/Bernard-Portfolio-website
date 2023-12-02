import React from 'react'

const About = () => {
  return (
    <div className='aboutme-container'>
      <div className='flex flex-col w-5/6 justify-center items-center bg-stone-200'>
        <h1 className='text-3xl font-nameHeaderFont py-2'>About Me</h1>
        <div className="flex flex-row justify-center item-center">
          <p className='text-lg w-3/4 p-3 font-medium text-gray-500'>
            <img className='md:w-[30%] w-[90%]  md:float-right' src='images\Bernard_profile_crop.jpg' alt='Bernard Nicolas Brillanti'/> 
            My name is Bernard Nicolas Brillanti. I was born in 1968 in France. 
            I have a degree in art and literature from the University of Aix en Provence. 
            I have worked as a framer at Galleriets Rammeverksted AS since 1995. 
            I have also been an assistant to Tom Sandberg from 2001 to 2010. 
            I have been a student of Bernard Geoffroy since 2014. 
            I have been a member of Norske Grafikere since 2015. 
            I have been a member of the Norwegian Sculptors Association since 2017. 
            I have been a member of the Norwegian Association of Fine Artists since 2018. 
            I have been a member of the Norwegian Association of Visual Artists since 2019. 
            I have been a member of the Norwegian Association of Artists since 2020.
          </p>
        </div>
      </div>
    </div>
  )
}



export default About