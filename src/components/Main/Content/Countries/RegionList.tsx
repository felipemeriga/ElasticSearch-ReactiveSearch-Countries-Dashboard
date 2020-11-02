import {SearchDiv, StyledMultiList} from './index';
import React from 'react';

export const RegionListContainer = () => {
    return (
        <SearchDiv>
            <StyledMultiList
                size={300}
                showCheckbox={true}
                componentId='RegionSensor'
                dataField='region.keyword'
                title='Region'
                react={{
                    and: ['TimezoneSensor', 'SubRegionSensor', 'CurrencySensor', 'LanguageSensor']
                }}
            />
        </SearchDiv>
    );
};
