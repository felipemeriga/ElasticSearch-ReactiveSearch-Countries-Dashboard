import React from 'react'
import RegionIcon from '../../Icons/Menu/RegionIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';

interface IRegionProps {
    subRegion: string;
}

type Props = IRegionProps;
const Subregion: React.FC<Props> = props => {
    const {subRegion} = props;

    return (
        <Wrapper>
            <ShapeWrapper>
                <RegionIcon />
            </ShapeWrapper>
            <HeaderD>
                <TitleD>Sub-Region:</TitleD>
            </HeaderD>
            <TextD>
                {subRegion}
            </TextD>
        </Wrapper>
    )
};

export default Subregion
