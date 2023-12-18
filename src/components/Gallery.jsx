
import React, { useState, useEffect } from 'react';
import ImageModal from '../components/ImageModal';



const Gallery = () => {
  const images = [
        {
            url: 'images/gallery/sculpture1.jpg',
            caption: 'Sculpture 1',
        },
        {
            url: 'images/gallery/sculpture2.jpg',
            caption: 'Sculpture 2',
        },
        {
            url: 'images/gallery/sculpture3.jpg',
            caption: 'Sculpture 3',
        },
        {
            url: 'images/gallery/sculpture4.jpg',
            caption: 'Sculpture 4',
        },
        {
            url: 'images/gallery/sculpture5.jpg',
            caption: 'Sculpture 5',
        },
        {
            url: 'images/gallery/sculpture6.jpg',
            caption: 'Sculpture 6',
        },
        {
            url: 'images/gallery/sculpture7.jpg',
            caption: 'Sculpture 7',
        },
        {
            url: 'images/gallery/sculpture8.jpg',
            caption: 'Sculpture 8',
        },
        {
            url: 'images/gallery/sculpture9.jpg',
            caption: 'Sculpture 9',
        },
        {
            url: 'images/gallery/sculpture10.jpg',
            caption: 'Sculpture 10',
        },
        {
            url: 'images/gallery/sculpture11.jpg',
            caption: 'Sculpture 11',
        },
    ]

    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    console.log('modalIsOpen:', modalIsOpen);
    console.log('selectedImage:', selectedImage);
  }, [modalIsOpen, selectedImage]);

  return (
    <div className='gallery-container'>
      
      {/* <h1 className="text-2xl py-5 font-nameHeaderFont bg-white text-center">Gallery Page</h1> */}
      <div className='px-3 columns-1 sm:columns-2 md:columns-3 xl:columns-4'>
        {images.map((image, index) => (
          <img
            className='mb-2 h-200 w-100 hover:shadow-xl hover:scale-95 duration-200'
            src={image.url}
            alt='sculpture'
            key={index}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} selectedImage={selectedImage}/>
      
    </div>
  );

};

export default Gallery