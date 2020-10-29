import React from 'react'
import styled from 'styled-components'
import NativeNameIcon from '../../Icons/Menu/NativeNameIcon';

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
