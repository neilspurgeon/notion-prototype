import React from 'react';
import styled from 'styled-components';
import BoardHeader from 'components/BoardHeader';
import SearchBar from 'components/SearchBar';
import BoardCol from 'components/BoardCol';

const itemsArr = [
  {
    type: "notStarted",
    items: ["Interview 1", "Interview 2"]
  }, {
    type: "inProgress",
    items: ["Design Exercise"]
  }, {
    type: "complete",
    items: ["Phone Call"]
  }
]

const notStartedArr = [ "Interview 1", "Interview 2"]
const inProgressArr = ["Design Exercise"]
const completeArr = ["Phone Call"]
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
      searchValue: "",
      initialItems: itemsArr,
      filteredItems: ""
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
    this.filter(e.target.value);
  }

  filter = (text) => {
    let filteredItems = [];

    this.state.initialItems.map((category) => {
      let obj = {type: category.type, items: []};

      category.items.filter((item) => {
        let foundItem = item.toLowerCase().search(text.toLowerCase()) !== -1;
        if (foundItem) {
          obj.items.push(item);
        }
      });

      if (obj.items[0]) {
        filteredItems.push(obj);
      }

    })

    this.setState({ filteredItems: filteredItems });
  }

  handleClearSearch = () => {
    this.setState({
      searchValue: "",
      filteredItems: ""
    });
  }

  handleCancelSearch = () => {
    this.setState({
      searchValue: "",
      filteredItems: ""
    });
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
          items={this.state.filteredItems}
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