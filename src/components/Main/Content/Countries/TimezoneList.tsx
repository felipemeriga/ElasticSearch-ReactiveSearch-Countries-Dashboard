import {SearchDiv, StyledMultiList} from './index';
import React from 'react';

export const TimezoneListContainer = () => {
    return (
        <SearchDiv>
            <StyledMultiList
                size={300}
                componentId='TimezoneSensor'
                showCheckbox={true}
                dataField='timezones.keyword'
                title='Timezone'
                react={{
                    and: ['RegionSensor', 'SubRegionSensor', 'CurrencySensor', 'LanguageSensor']
                }}
            />
        </SearchDiv>
    );
};
