import React from 'react'
import styled from 'styled-components'
import ContentTitle from 'components/Main/Content/Title'
import ContentCountries from 'components/Main/Content/Countries'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`;

const Content = () => {
  return (
    <Wrapper>
      <ContentTitle />
      <ContentCountries />
    </Wrapper>
  )
};

export default Content
