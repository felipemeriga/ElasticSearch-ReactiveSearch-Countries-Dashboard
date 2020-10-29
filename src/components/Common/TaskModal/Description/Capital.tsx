import React from 'react'
import CityIcon from '../../Icons/Menu/CityIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';

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
