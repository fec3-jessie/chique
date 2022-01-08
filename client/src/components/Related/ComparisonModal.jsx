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
      <div className='comparison-modal'>
        <ComparisonTable mainFeatures = {props.mainFeatures} comparisonFeatures = {props.comparisonFeatures} mainProductName = {props.mainProductName}/>
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default ComparisonModal;