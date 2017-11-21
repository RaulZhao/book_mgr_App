import React, { Component } from 'react';
import _ from 'lodash';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Header from './header/header';
import Booktable from './components/Booktable';
import './App.css';
import Book from './model/books';

const list = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      list
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.isSearched = this.isSearched.bind(this);
  }

  // componentDidMount () {
  //   Book.getAllBooks().then(jsonData => {
  //     if (!_.isEmpty(jsonData)) {
  //       this.setState({list: jsonData});
  //     }
  //   });
  // }

  onDismiss (id) {
    const updateList = this.state.list.filter((item) => {
      return item.objectID !== id;
    });

    this.setState({list: updateList});
  }

  onSearchChange (evt) {
    this.setState({searchTerm: evt.target.value})
  }

  isSearched (searchingName) {
    return (iterator) => {
      return searchingName && iterator.title.toLowerCase().includes(searchingName.toLowerCase());
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Booktable />
      </div>
    );
  }
}

export default App;
