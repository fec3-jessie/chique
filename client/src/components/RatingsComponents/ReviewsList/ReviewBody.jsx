import React, {useState} from 'react';
import ThumbnailModal from './ThumbnailModal.jsx';

function ReviewBody ({body, summary, photos}) {
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState('');
  const openPhotoModal = (url) => {
    setShowModal(true);
    setModalPhoto(url);
  };

  return (
    <div className='body-tile'>
      <p className='body-summary-tile'>{summary} </p>
      <p>{body}</p>
      {photos.length > 0 ?
        photos.map((photo) => {
          return <div className='review-thumbnail' key={photo.id}>
            <img
              onClick={() => openPhotoModal(photo.url)}
              className='img-container'
              src={photo.url}
              key={photo.id}
              alt='product thumbnail'>
            </img>
          </div>;
        }) : null}
      {showModal ? <ThumbnailModal setShowModal={setShowModal} photo={modalPhoto}/> : null}
    </div>
  );
}

export default ReviewBody;