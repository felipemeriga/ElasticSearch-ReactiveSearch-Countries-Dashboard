import React from 'react';
import {ICountryData} from '../../../Main/Content/Tasks';
import NativeName from './NativeName';
import Capital from './Capital';
import Population from './Population';
import Subregion from './Subregion';
import Currencies from './Currencies';
import Languages from './Languages';

interface IDescriptionProps {
    country: ICountryData;
}

type Props = IDescriptionProps;
const Description: React.FC<Props> = props => {
    const {country} = props;

    return (
        <>
            <NativeName nativeName={country.nativeName}/>
            <Capital capital={country.capital}/>
            <Population population={country.population}/>
            <Subregion subRegion={country.subRegion}/>
            <Currencies currencies={country.currencies} />
            <Languages languages={country.languages} />
        </>
    )
};

export default Description
