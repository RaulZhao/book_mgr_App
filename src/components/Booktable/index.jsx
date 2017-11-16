import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import TableModalHeader from './TableModalHeader';
import TableModalFooter from './TableModalFooter';
import './style.css';

const selectRowProp = {
  mode: 'checkbox',
  bgColor: 'rgb(238, 193, 213)'
};

class Booktable extends Component {
  constructor(props) {
    super(props);
  }

  createCustomInsertButton = (onClick) => {
    return (
      <InsertButton
        btnText='CustomInsertText'
        className='my-custom-class'
        onClick={ () => this.handleInsertButtonClick(onClick) }/>
    );
  }

  deleteRowHandler(next, dropRowKeys) {
    const dropRowKeysStr = dropRowKeys.join(',');

    if (confirm(`Are you sure you want to delete ${dropRowKeysStr}?`)) {
      // If the confirmation is true, call the function that
      // continues the deletion of the record.
      next();
    }
  }

  afterDeleteRow() {
    console.log(arguments);
  }

  getTableOptions() {
    return {
      insertModalHeader: TableModalHeader,
      insertModalFooter: TableModalFooter,
      handleConfirmDeleteRow: this.deleteRowHandler,
      afterDeleteRow: this.afterDeleteRow
      // insertBtn: this.createCustomInsertButton
    };
  }

  render () {
    const { list } = this.props;
    const options = this.getTableOptions();

    return (
      <div className="book-list-container" >
        <BootstrapTable
          data={list}
          selectRow={selectRowProp}
          deleteRow={true}
          insertRow={true}
          search={true}
          options={options}>
            <TableHeaderColumn isKey={true} dataField='objectID' hideColumn={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='title' dataSort={true}>Book Name</TableHeaderColumn>
            <TableHeaderColumn dataField='url'>Book Link</TableHeaderColumn>
            <TableHeaderColumn dataField='author' dataSort={true}>Author</TableHeaderColumn>
            <TableHeaderColumn dataField='points'>Points</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Booktable;
