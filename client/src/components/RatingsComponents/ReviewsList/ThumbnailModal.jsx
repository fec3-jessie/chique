import React, {useRef} from 'react';
import ReactDom from 'react-dom';


function ThumbnailModal ({setShowModal, photo}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  }

  return ReactDom.createPortal(
    <div className='pic-modal-container' ref={modalRef}
      onClick={() => setShowModal(false)}>
      <div className='pic-modal'>
        <img src={photo} alt='product image'></img>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
}

export default ThumbnailModal;