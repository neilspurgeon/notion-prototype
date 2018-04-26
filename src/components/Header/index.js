import React from 'react';
import styled from 'styled-components';

import actions from './headerActions.svg';
import menu from './menuIcon.svg';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFF;
  width: 100%;
  height: 65px;
  border-bottom: 1px #E6E6E6 solid;
`;

const Title = styled.span`
  position: absolute;
  left: 43px;
  bottom: 14px;
  line-height: 1;
  font-size: 1.4rem;
  letter-spacing: -.015em;
`

const MenuBttn = styled.span`
  position: absolute;
  left: 12px;
  bottom: 15px;
  line-height: 0;
`

const Actions = styled.span`
  position: absolute;
  right: 15.5px;
  bottom: 13.5px;
  line-height: 0;
`

const Header = () => {
  return (
    <Wrapper>

      <MenuBttn>
        <img src={menu} alt="menu"/>
      </MenuBttn>

      <Title>Getting a Job a...</Title>

      <Actions>
        <img src={actions} alt="actions" />
      </Actions>

    </Wrapper>
  )
};

export default Header;