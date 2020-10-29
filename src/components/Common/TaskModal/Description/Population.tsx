import React from 'react'
import styled from 'styled-components'
import PopulationIcon from '../../Icons/Menu/PopulationIcon';

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

interface IPopulationProps {
    population: number;
}

type Props = IPopulationProps;
const Population: React.FC<Props> = props => {
    const {population} = props;

    return (
        <Wrapper>
            <ShapeWrapper>
                <PopulationIcon />
            </ShapeWrapper>
            <HeaderD>
                <TitleD>Population:</TitleD>
            </HeaderD>
            <TextD>
                {population.toLocaleString()}
            </TextD>
        </Wrapper>
    )
};

export default Population
