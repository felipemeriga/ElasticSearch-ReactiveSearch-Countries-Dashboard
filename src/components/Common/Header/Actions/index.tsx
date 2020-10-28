import React from 'react'
import styled from 'styled-components'
import ActionsShape from 'components/Common/Header/Actions/Shape'
import ActionsSearch from 'components/Common/Header/Actions/Search'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    justify-items: end;
  }
`;

const Actions = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
};

export default Actions
