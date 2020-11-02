import React from 'react'
import NativeNameIcon from '../../Icons/Menu/NativeNameIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';

interface INativeNameProps {
    nativeName: string;
}

type Props = INativeNameProps;
const NativeName: React.FC<Props> = props => {
    const {nativeName} = props;

    return (
        <Wrapper>
            <ShapeWrapper>
                <NativeNameIcon />
            </ShapeWrapper>
            <HeaderD>
                <TitleD>Native Name:</TitleD>
            </HeaderD>
            <TextD>
                {nativeName}
            </TextD>
        </Wrapper>
    )
};

export default NativeName
