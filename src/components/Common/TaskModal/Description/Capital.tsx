import React from 'react'
import styled from 'styled-components'
import CityIcon from '../../Icons/Menu/CityIcon';

const variables = {
    colorGray: '#92929d'
};
const Wrapper = styled.div`
  display: flex;
  svg {
    fill: ${variables.colorGray};
  }
`;
const ShapeWrapper = styled.div`
  width: 20px;
`;
const HeaderD = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const TitleD = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
`;
const TextD = styled.span`
  margin-left: 10px;
  color: ${variables.colorGray};
  font-size: 14px;
`;

interface ICapitalProps {
    capital: string;
}

type Props = ICapitalProps;
const Capital: React.FC<Props> = props => {
    const {capital} = props;

    return (
        <Wrapper>
            <ShapeWrapper>
                <CityIcon />
            </ShapeWrapper>
            <HeaderD>
                <TitleD>Capital:</TitleD>
            </HeaderD>
            <TextD>
                {capital}
            </TextD>
        </Wrapper>
    )
};

export default Capital
