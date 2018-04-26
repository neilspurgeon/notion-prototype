import React from 'react';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import Board from 'components/Board';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weigh: bold;
  color: #000;
  font-size: 33px;
  padding: 18px 25px;
  margin:
`

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />

        <H1>Getting a Job at Notion</H1>

        <Board />

      </div>
    );
  }
}

export default App;
