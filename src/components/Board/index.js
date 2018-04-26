import React from 'react';
import styled from 'styled-components';
import BoardHeader from 'components/BoardHeader';
import SearchBar from 'components/SearchBar';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleClearSearch = () => {
    this.setState({
      searchValue: ""
    })
  }

  handleCancelSearch = () => {
    this.setState({
      searchValue: ""
    })
  }


  render() {
    return (
      <div>
        <BoardHeader />
        <SearchBar
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
          onClear={this.handleClearSearch}
          onCancel={this.handleCancelSearch} />
      </div>
    )
  }

};

export default Board;