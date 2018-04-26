import React from 'react';
import styled from 'styled-components';

import moreIcon from './moreIcon.svg';

const Wrapper = styled.div`
  padding: 0 25px;
  color: #BBBAB2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AddView = styled.span`
  letter-spaceing: .015em;
`

const More = styled.img`
  padding: 3px 15px;
`

const Cta = styled.button`
  border: none;
  font-size: 1.5rem;
  background-color: #2D9CDB;
  outline: none;
  padding: 4px 10px 6px;
  border-radius: 3px;
  color: #FFF;
  font-family: system-ui, -apple-system, sans-serfif;
  font-weight: 400;
  letter-spacing: .01em;
}`

const BoardHeader = () => {
  return (
    <Wrapper>

      <AddView>+ Add a View</AddView>

      <span>
        <More src={moreIcon} />
        <Cta> New Item</Cta>
      </span>

    </Wrapper>
  )
};

export default BoardHeader;