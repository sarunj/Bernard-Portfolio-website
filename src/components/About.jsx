import React from 'react'

const About = () => {
  return (
    <div className='aboutme-container'>
      <div className='flex flex-col w-5/6 justify-center items-center bg-stone-200'>
        <h1 className='text-3xl font-nameHeaderFont py-2'>About Me</h1>
        <div className="flex flex-row justify-center item-center">
          <p className='text-lg w-3/4 p-3 font-medium text-gray-500'>
            <img className='w-[90%] md:w-[30%] p-2 xl:w-[20%] md:float-right' src='images\Bernard_profile_crop.jpg' alt='Bernard Nicolas Brillanti'/> 
            I'm Bernard Nicolas Brillanti, born in 1968 in France. Armed with a degree in art and literature from the University of Aix en Provence, 
            I've been framing art at Galleriets Rammeverksted AS since 1995. From 2001 to 2010, I worked as an assistant for Tom Sandberg, gaining valuable experience. 
            Since 2014, I've been a student of Bernard Geoffroy, shaping my artistic perspective. 
            I'm a member of Norske Grafikere (2015), Norwegian Sculptors Association (2017), Norwegian Association of Fine Artists (2018), 
            Norwegian Association of Visual Artists (2019), and the Norwegian Association of Artists (2020).
            My portfolio reflects a lifelong commitment to the arts, marked by continuous growth and a passion 
            for pushing creative boundaries. Explore my journey in art with me.
          </p>
        </div>
      </div>
    </div>
  )
}



export default About