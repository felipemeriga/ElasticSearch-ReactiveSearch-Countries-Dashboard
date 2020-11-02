import React from 'react'
import styled from 'styled-components'
import Index from '../../Flag';
import {ICountryData} from '../../../../utils/types';

const TextStyles = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #92929d;
`;
const TittleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled(TextStyles)`
  color: #171725;
  margin-bottom: 7px;
  text-decoration: 0 && 'line-through';
`;

const FlagWrapper = styled(Index)`
  margin-left: 15vh;
`;

interface ITitleProps {
  data: ICountryData
}

const Titles: React.FC<ITitleProps> = props => {
  const { data } = props;

  return (
  <Wrapper>
    <TittleWrapper>
      <Title {...props}>{data.name}</Title>
      <div>&nbsp;</div>
      <Title {...props}>({data.nativeName})</Title>

        <FlagWrapper url={data.flag}/>
    </TittleWrapper>

  </Wrapper>
  );
};

export default Titles
