import React from 'react'

const About = () => {
  return (
    <div className='content-container'>
      <div className='flex flex-col w-3/4 justify-center  py-8 items-center bg-stone-200'>
        <h1 className='text-3xl font-nameHeaderFont py-2'>About Me</h1>
        {/* Write this in 1 person, not 3rd person.
        Bernard Brillanti
        24.08.1968, Fransk
        1986-1989: Universitet,
        Aix en Provence - art&litteratur
        1995-2011: Galleriets
        Rammeverksted AS (innramming
        av ulike utstillinger for: Galleri
        Riis, Galleri Wang, Blomqvist,
        Lillehammer Kunstmuseum,
        Astrup Fearnley Museum og
        Norske Grafikere)
        2001-2010: Assistent,
        for Tom Sandberg
        2014-2017: Lærling,
        hos Bernard Geoffroy (skulptør)*/}
        <div>
          <img className='float-right w-[30%] p-4' src='images\Bernard_profile_crop.jpg' alt='Bernard Nicolas Brillanti' />
          {/* text-justify text-lg w-3/4 clear-left font-medium text-gray-500 */}
          <p className=' text-justify text-lg w-3/4 px-4 font-medium text-gray-500  clear-left'> 
            My name is Bernard Nicolas Brillanti. I was born in 1968 in France. I have a degree in art and literature from the University of Aix en Provence. I have worked as a framer at Galleriets Rammeverksted AS since 1995. I have also been an assistant to Tom Sandberg from 2001 to 2010. I have been a student of Bernard Geoffroy since 2014. I have been a member of Norske Grafikere since 2015. I have been a member of the Norwegian Sculptors Association since 2017. I have been a member of the Norwegian Association of Fine Artists since 2018. I have been a member of the Norwegian Association of Visual Artists since 2019. I have been a member of the Norwegian Association of Artists since 2020.
          </p>
        
        </div>
        
        
        
      </div>
    </div>
  )
}



export default About