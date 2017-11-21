import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import TableModalHeader from './TableModalHeader';
import TableModalFooter from './TableModalFooter';
import Books from '../../model/books';
import './style.css';

const selectRowProp = {
  mode: 'radio',
  bgColor: 'rgb(238, 193, 213)'
};

class Booktable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    Books.getAllBooks().then(jsonData => {
      if (!_.isEmpty(jsonData)) {
        this.setState({list: jsonData});
      }
    });
  }

  createCustomInsertButton = (onClick) => {
    return (
      <InsertButton
        btnText='CustomInsertText'
        className='my-custom-class'
        onClick={() => this.handleInsertButtonClick(onClick) }/>
    );
  }

  addRowHandler(next, newRows) {
    console.log(newRows);
    next();
  }

  afterInsertRow(newRow) {
    Books.createNewBook(newRow);
  }

  deleteRowHandler(next, dropRowKeys) {
    const dropRowKeysStr = dropRowKeys.join(',');

    if (confirm(`Are you sure you want to delete ${dropRowKeysStr}?`)) {
      // If the confirmation is true, call the function that
      // continues the deletion of the record.
      Books.deleteBookById(dropRowKeys[0]);
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
      handleConfirmAddRow: this.addRowHandler,
      handleConfirmDeleteRow: this.deleteRowHandler,
      afterDeleteRow: this.afterDeleteRow,
      afterInsertRow: this.afterInsertRow
      // insertBtn: this.createCustomInsertButton
    };
  }

  render () {
    const { list } = this.state;
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
