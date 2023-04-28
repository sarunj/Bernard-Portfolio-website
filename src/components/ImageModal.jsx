import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, selectedImage }) => {
    console.log('ImageModal props:', { modalIsOpen, closeModal, selectedImage });
    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        </Modal>
    );
};

export default ImageModal;
