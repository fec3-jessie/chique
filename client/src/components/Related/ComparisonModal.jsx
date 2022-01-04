import React, {useRef} from 'react';
import ReactDom from 'react-dom';
import ComparisonTable from './ComparisonTable.jsx';

const ComparisonModal = ({setShowModal}) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className='pic-modal-container' ref ={modalRef}
      onClick={() => setShowModal(false)}>
      <div className='pic-modal'>
        <button onClick={() => setShowModal(false)}>X</button>
        <ComparisonTable mainFeatures = {props.mainFeatures} compareFeatures = {props.comparisonFeatures} />
      </div>
    </div>,
    document.getElementById('thumbnail-portal')
  );
};

export default ComparisonModal;