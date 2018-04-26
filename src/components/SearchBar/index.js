import React from 'react';
import styled, { css } from 'styled-components';

import searchIcon from './searchIcon.svg';
import clearIcon from './clearIcon.svg';


const Input = styled.input`
  background-color: #F8F7F6;
  border: none;
  border-radius: 100px;
  height: 32px;
  width: 100%;
  padding-left: 33px;
  outline: none;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
`

const Container = styled.div`
  transition: .3s ease all;
  transition-delay: .1s;
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;

  ${({ active }) => active && css `
    transform: translateY(-41vh);
    background-color: rgba(255, 255, 255, 1);
    height: 100vh;
  `}
`

const SearchWrapper = styled.div`
  margin: 10px 20px 35px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  position: relative;
  flex-grow: 2;

  &:before {
    content: url(${searchIcon});
    position: absolute;
    left: 12px;
    top: 10px;
  }
`

const Clear = styled.img`
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0;
  transition: .2s ease opacity;

  ${({ visible }) => visible && css`
    opacity: 1;
  `}
  ;
`

const Cancel = styled.div`
  padding: 0 12px;
  display: none;
  opacity: 0;
  transition: oapcity .5s ease;

  ${({ active }) => active && css`
    display: inline-block;
    opacity: 1;
  `}
`

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleFocus = () => {
    this.setState({ active: true });
  }

  handleCancel = () => {
    this.setState({ active: false });
    this.props.onCancel();
  }

  render() {
    return (
      <Container active={this.state.active}>
        <SearchWrapper>

          <InputWrapper>
            <Input type="text" placeholder="Search" onChange={this.props.onChange} onFocus={this.handleFocus} value={this.props.value} />
            <Clear src={clearIcon} onClick={this.props.onClear} visible={this.props.value} />
          </InputWrapper>

          <Cancel onClick={this.handleCancel} active={this.state.active}>Cancel</Cancel>

        </SearchWrapper>
      </Container>
    )
  }

};

export default SubHeader;