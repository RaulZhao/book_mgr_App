import React from 'react';
import {InsertModalHeader} from 'react-bootstrap-table';

const TableModalHeader = (closeModal, save) => {
  const _closeModal = closeModal;
  const _save = save;

  const handleInsertButtonClick = (closeModal) => {
    alert(`[Modal Header Event]: Modal close event triggered!`);
    closeModal();
  }

  return (
    <InsertModalHeader
      className='add-book-modal-header'
      title='Add New Book'
      onModalClose={ () => handleInsertButtonClick(_closeModal) }/>
      // hideClose={ true } to hide the close button
  );
}

export default TableModalHeader
