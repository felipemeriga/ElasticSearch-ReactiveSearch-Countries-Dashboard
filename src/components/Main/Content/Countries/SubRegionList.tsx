import React from 'react';
import {SearchDiv, StyledMultiList} from './index';

export const SubRegionListContainer = () => {
    return (
        <SearchDiv>
            <StyledMultiList
                size={300}
                showCheckbox={true}
                componentId='SubRegionSensor'
                dataField='subregion.keyword'
                title='Sub-Region'
                react={{
                    and: ['TimezoneSensor', 'RegionSensor', 'CurrencySensor', 'LanguageSensor']
                }}
            />
        </SearchDiv>
    );
};
