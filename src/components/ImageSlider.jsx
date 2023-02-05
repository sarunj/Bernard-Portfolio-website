import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const ImageSlider = () => {
    const images = [
        {
            url: 'images/sculpture1.jpg',
        },
        {
            url: 'images/sculpture2.jpg',
        },
        {
            url: 'images/sculpture3.jpg',
        },
        {
            url: 'images/sculpture4.jpg',
        },
        {
            url: 'images/sculpture5.jpg',
        },
        {
            url: 'images/sculpture6.jpg',
        },
        {
            url: 'images/sculpture7.jpg',
        },
        {
            url: 'images/sculpture8.jpg',
        },
        {
            url: 'images/sculpture9.jpg',
        },
        {
            url: 'images/sculpture10.jpg',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className='max-w-[800px] h-[700px] w-full m-auto py-16 px-4 relative group'>
            <div 
                style={{backgroundImage: `url(${images[currentIndex].url})`}}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>

            {/* Left arrow */}
            <div>
                <BsChevronCompactLeft onClick={prevSlide} size={30} 
                className='hidden group-hover:block absolute top-1/2 left-8 text-4xl text-white transform -translate-y-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 duration-200' />
            </div>
            {/* Right arrow */}
            <div>
                <BsChevronCompactRight onClick={nextSlide} size={30} 
                className='hidden group-hover:block absolute top-1/2 right-1 text-4xl text-white transform -translate-y-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 duration-200' />
            </div>
            {/* Dots */}
            <div className='flex flex-row justify-center py-2'>
                {images.map((image, index) => (
                    <RxDotFilled key={index} size={30} onClick={() => goToSlide(index)}
                    className={`mx-2 cursor-pointer hover:scale-[1.3] duration-200 ${index === currentIndex ? 'text-sky-800/80' : 'text-gray-500/70'}`} />
                ))}
            </div>
        </div>
    )
}

export default ImageSlider