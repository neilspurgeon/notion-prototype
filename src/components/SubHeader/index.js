import React from 'react';
import styled from 'styled-components';

import emojiIcon from './emojiIcon.svg';
import coverIcon from './coverIcon.svg';
import descriptionIcon from './descriptionIcon.svg';


const Wrapper = styled.div`
  padding-top: 86px;
  padding-left: 25px;
  color: #BBBAB2;
`

const Span = styled.span`
  margin-right: 15px;
  display: inline-flex;
`

const Img = styled.img`
  margin-right: 6px;
`

const SubHeader = () => {
  return (
    <Wrapper>

      <Span>
        <Img src={emojiIcon} />
        Add Icon
      </Span>

      <Span>
        <Img src={coverIcon} />
        Add Cover
      </Span>

      <Span>
        <Img src={descriptionIcon} />
        Add Description
      </Span>

    </Wrapper>
  )
};

export default SubHeader;