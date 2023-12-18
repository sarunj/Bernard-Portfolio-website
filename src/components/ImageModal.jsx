import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, selectedImage }) => {
    console.log('ImageModal props:', { modalIsOpen, closeModal, selectedImage });
    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        className='modal-content pt-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        overlayClassName='modal-overlay'
        preventScroll={false}
        >
        <div className="relative pb-9/16">
            <button onClick={closeModal} className='bg-transparent text-3xl font-black hover:font-semibold active:text-sky-950'>
            &times;
            </button>
            {selectedImage && <img src={selectedImage.url} alt='sculpture' className="modal-image object-contain max-h-[50%] max-w-[80%] mx-auto my-10 " />}
        </div>
        </Modal>
    );
};

export default ImageModal;
