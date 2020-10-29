import React from 'react'
import PopulationIcon from '../../Icons/Menu/PopulationIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';

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
