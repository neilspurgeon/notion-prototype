import React from 'react';
import styled from 'styled-components';

import actionIcons from './actions.svg';

const SectionLabel = styled.h2`
  padding: 2px 10px 3px;
  display: inline-block;
  font-weight: 400;
  font-size: 1.4rem;
  border-radius: 3px;
  color: #424241;
  ${props => (props.type === "notStarted") && `
    background-color: #FECBD0;
  `}

  ${props => (props.type === "inProgress") && `
    background-color: #FFF0C9;
  `}

  ${props => (props.type === "complete") && `
    background-color: #CAE8E4;
  `}

  ${props => (props.type === "hidden") && `
    background-color: #DADADA;
  `}
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between
`

const Actions = styled.img`
  padding: 0 10px;
`

const Count = styled.span`
  flex-grow: 2;
  padding: 0 10px;
`

const Wrapper = styled.div`
  width: 75vw;
  margin-left: 25px;
  display: inline-block;
  flex-shrink: 0;
`

const Item = styled.div`
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 13px 10px 16px;
  margin-bottom: 10px;
  color: #424241;
`

const BoardCol = (props) => {
  return (
    <Wrapper>

      <Header>
        {props.type === "notStarted" &&
          <SectionLabel type="notStarted">Not Started</SectionLabel>
        }

        {props.type === "inProgress" &&
          <SectionLabel type="inProgress">In Progress</SectionLabel>
        }

        {props.type === "complete" &&
          <SectionLabel type="complete">Complete</SectionLabel>
        }

        {props.type === "hidden" &&
          <SectionLabel type="hidden">Hidden</SectionLabel>
        }

        <Count>1</Count>

        <Actions src={actionIcons} alt="actions" />
      </Header>

      {props.items && props.items.map( (item, i) =>
        <Item key={item + i}>{item}</Item>
      )}

    </Wrapper>
  )

};

export default BoardCol;