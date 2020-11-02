import {SearchDiv, StyledMultiList} from './index';
import React from 'react';

export const LanguageListContainer = () => {
    return (
        <SearchDiv>
            <StyledMultiList
                size={300}
                componentId='LanguageSensor'
                showCheckbox={true}
                dataField='languages.name.keyword'
                title='Language'
                react={{
                    and: ['RegionSensor', 'SubRegionSensor', 'TimezoneSensor', 'CurrencySensor']
                }}
            />
        </SearchDiv>
    );
};
