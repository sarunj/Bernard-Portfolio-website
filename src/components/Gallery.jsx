
import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
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
    <div className='content-container'>
      
      <h1 className="text-2xl py-5 font-nameHeaderFont bg-white text-center">Gallery Page</h1>
      <div className='columns-1 sm:columns-2 md:columns-3 xl:columns-4'>
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

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
        contentLabel='Image Modal'
        className='modal-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        overlayClassName='modal-overlay'
      >
        <div className="relative pb-9/16">
            <button onClick={closeModal} className='bg-black'>
                &times;
            </button> 
            {selectedImage && <img src={selectedImage.url} alt='sculpture' className="modal-image object-contain max-h-[80%] max-w-[80%] mx-auto my-auto" />}
        </div>
      </ImageModal>
    </div>
  );

};

export default Gallery