import React from 'react';
import { InsertModalFooter } from 'react-bootstrap-table';

const TableModalFooter = (closeModal, save) => {
  const _closeModal = closeModal;
  const _save = save;

  const beforeClose = (e) => {
    console.log(`Before Close is invoked`);
  }

  const beforeSave = (e) => {
    console.log(`Before Save is invoked`);
  }

  const handleModalClose = (closeModal) => {
    // it's not necessary to implement this function if you have no any process before modal close
    closeModal();
  }

  const handleSave = (save) => {
    // it's not necessary to implement this function if you have no any process before save
    console.log(arguments);
    save();
  }

  return (
    <InsertModalFooter
      className='my-custom-modal-footer'
        saveBtnText='Create'
        closeBtnText='Close'
        closeBtnContextual='btn-warning'
        saveBtnContextual='btn-success'
        closeBtnClass='my-close-btn-class'
        saveBtnClass='my-save-btn-class'
        beforeClose={ beforeClose }
        beforeSave={ beforeSave }
        onModalClose={() => handleModalClose(_closeModal)}
        onSave={() => handleSave(_save)}/>
  )
}

export default TableModalFooter
