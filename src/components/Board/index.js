import React from 'react';
import styled from 'styled-components';
import BoardHeader from 'components/BoardHeader';
import SearchBar from 'components/SearchBar';
import BoardCol from 'components/BoardCol';

const notStartedArr = [
  { title: "Interview 1"},
  { title: "Interview 2" },
]

const inProgressArr = [
  { title: "Design Exercise"},
]

const completeArr = [
  { title: "Phone Call" },
]

const recentSearchArr = ["Interview", "Inter", "Phone", "Design", "Exercise"];

const HorizontalScroll = styled.div`
  white-space: nowrap;
  width: 100vw;
  overflow-x: auto;
  display: flex;
  padding-top: 67px;
`

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
          onCancel={this.handleCancelSearch}
          suggestions={recentSearchArr}
        />

        <HorizontalScroll>
          <BoardCol type="notStarted" items={notStartedArr} />
          <BoardCol type="inProgress" items={inProgressArr} />
          <BoardCol type="complete" items={completeArr} />
          <BoardCol type="hidden" />
        </HorizontalScroll>

      </div>
    )
  }

};

export default Board;