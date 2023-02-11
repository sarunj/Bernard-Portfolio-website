import React from 'react'

const Gallery = () => {
  const images = [
        {
            url: 'images/gallery/sculpture1.jpg',
        },
        {
            url: 'images/gallery/sculpture2.jpg',
        },
        {
            url: 'images/gallery/sculpture3.jpg',
        },
        {
            url: 'images/gallery/sculpture4.jpg',
        },
        {
            url: 'images/gallery/sculpture5.jpg',
        },
        {
            url: 'images/gallery/sculpture6.jpg',
        },
        {
            url: 'images/gallery/sculpture7.jpg',
        },
        {
            url: 'images/gallery/sculpture8.jpg',
        },
        {
            url: 'images/gallery/sculpture9.jpg',
        },
        {
            url: 'images/gallery/sculpture10.jpg',
        },
        {
            url: 'images/gallery/sculpture11.jpg',
        },
    ]

  return (
    <div className='content-container'>
        <h1 className='text-2xl py-5 font-nameHeaderFont bg-slate-300'>Gallery Page</h1>

        {/*  */}
        <div className='columns-1 sm:columns-2 md:columns-3 xl:columns-4'> 
          {images.map((image, index) => (
              <img className=' m-2 h-200 w-100 hover:shadow-xl hover:scale-95 duration-200' src={image.url} alt='sculpture' key={index} />
          ))}
        </div>
    </div>
  )
}

export default Gallery