import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './style.css';

class Booktable extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { list } = this.props;

    return (
      <div className="book-list-container" >
        <BootstrapTable data={list} striped hover>
          <TableHeaderColumn isKey dataField='title'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='url'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='author'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='points'>Points</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Booktable;
