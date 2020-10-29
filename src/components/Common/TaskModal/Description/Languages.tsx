import React from 'react'
import {ILanguage} from '../../../Main/Content/Tasks';
import LanguageIcon from '../../Icons/Menu/LanguageIcon';
import {HeaderD, ShapeWrapper, TextD, TitleD, Wrapper} from './DescriptionStructure';

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
