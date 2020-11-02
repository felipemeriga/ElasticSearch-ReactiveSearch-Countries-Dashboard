import React from 'react';
import {SearchDiv, StyledMultiList} from './index';

export const CurrencyListContainer = () => {
  return (
      <SearchDiv>
          <StyledMultiList
              size={300}
              componentId='CurrencySensor'
              showCheckbox={true}
              dataField='currencies.name.keyword'
              title='Currency'
              react={{
                  and: ['RegionSensor', 'SubRegionSensor', 'TimezoneSensor', 'LanguageSensor']
              }}
          />
      </SearchDiv>
  );
};
