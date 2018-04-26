import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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
  transition: .3s ease transform ,
              2s ease height 1s,
              1s ease background-color .3s;
  transition-delay: .1s;
  background-color: rgba(255, 255, 255, 0);
  height: 10vh;
  position: absolute;
  width: 100%;

  ${({ active }) => active && css `
    transform: translateY(-41vh);
    background-color: rgba(255, 255, 255, 1);
    height: 100vh;
    position: fixed;
    transition: .3s ease transform .1s,
                .3s ease height,
                .2s ease background-color;
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

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  },
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const SearchResults = styled.div`
  margin: 0 25px;
  transition: 5s ease all;
  animation: ${slideUp} .3s ease;
`

const ResultUl = styled.ul`
  padding: 0;
`

const RencentLi = styled.li`
  list-style: none;
  padding: 15px 0;
  border-bottom: 1px solid #E6E6E6;
  margin: 0;
  color: #A5A5A5;
  font-weight: 400;
  font-size: 1.6rem;
`

const RecentHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #424241;
`

const SectionHeader = styled.h2`
  padding: 2px 10px 3px;
  display: inline-block;
  font-weight: 400;
  font-size: 1.4rem;
  border-radius: 3px;
  color: #424241;
  ${props => (props.type == "notStarted") && `
    background-color: #FECBD0;
  `}

  ${props => (props.type == "inProgress") && `
    background-color: #FFF0C9;
  `}

  ${props => (props.type == "complete") && `
    background-color: #CAE8E4;
  `}

  ${props => (props.type == "hidden") && `
    background-color: #DADADA;
  `}
`

const Item = styled.li`
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 13px 10px 16px;
  margin-bottom: 10px;
  color: #424241;
  list-style: none;
`

const NoResultsP = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: #A5A5A5;
  margin-top: 0;
`

const NoResultsHeader = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: #424241;
  padding-top: 10vh;
  margin-bottom: 5px;
`




class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
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


        {/* Suggestioned Search  */}
        {this.state.active && !this.props.value &&
          <SearchResults>

            <RecentHeader>Recent</RecentHeader>
            <ResultUl>
              {this.props.suggestions.map((text, i) => <RencentLi key={text}>{text}</RencentLi> ) }
            </ResultUl>

          </SearchResults>
        }

        {/* Search Results  */}
        {this.props.items && this.props.value &&
          <SearchResults>

              {this.props.items.map((category, i) => {
                if (category.items[0]) {
                  return (

                    <div>
                      <SectionHeader type={category.type}>{category.type}</SectionHeader>
                      <ResultUl>
                        {category.items.map((item, i) => { return <Item>{item}</Item> }) }
                      </ResultUl>
                    </div>

                  )
                }
              })}

          </SearchResults>
        }

        {/* No Results  */}
        {this.props.value && !this.props.items[0] &&
          <SearchResults>
            <NoResultsHeader>No Results Found</NoResultsHeader>
            <NoResultsP>Please check the spelling or  try searching for something else.</NoResultsP>
          </SearchResults>
        }

      </Container>
    )
  }

};

export default SubHeader;