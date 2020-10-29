import React from 'react'
import styled from 'styled-components'
import RegionIcon from '../../Icons/Menu/RegionIcon';

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
