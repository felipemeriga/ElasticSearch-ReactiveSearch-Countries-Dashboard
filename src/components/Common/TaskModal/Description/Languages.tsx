import React from 'react'
import styled from 'styled-components'
import {ILanguage} from '../../../Main/Content/Tasks';
import LanguageIcon from '../../Icons/Menu/LanguageIcon';

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

interface ILanguagesProps {
    languages: ILanguage[];
}

type Props = ILanguagesProps;
const Languages: React.FC<Props> = props => {
    const {languages} = props;

    const displayCurrencyInfo = (languages: ILanguage[]) => {
        return ( languages.map((language: ILanguage) => {
                return (
                    <TextD key={language.iso639_1}>
                        {language.name}({language.nativeName})
                    </TextD>
                )
            })
        )
    };
    return (
        <Wrapper>
            <ShapeWrapper>
                <LanguageIcon />
            </ShapeWrapper>
            <HeaderD>
                <TitleD>Languages:</TitleD>
            </HeaderD>
            {displayCurrencyInfo(languages)}
        </Wrapper>
    )
};

export default Languages
