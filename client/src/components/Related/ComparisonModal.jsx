import React, {useRef} from 'react';
import ReactDom from 'react-dom';
import ComparisonTable from './ComparisonTable.jsx';

const ComparisonModal = (props) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      props.setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className='pic-modal-container' ref ={modalRef}
      onClick={closeModal}>
      {/* <button onClick={closeModal}>X</button> */}
      <div className='comparison-modal'>
        <ComparisonTable mainFeatures = {props.mainFeatures} comparisonFeatures = {props.comparisonFeatures} />
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default ComparisonModal;