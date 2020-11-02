import {ReactiveList} from '@appbaseio/reactivesearch';
import {ICountryData} from '../../../../utils/types';
import CountryCard from '../../../Common/CountryCard';
import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CountryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ResultContainer = () => {
  return (
      <ResultWrapper>
          <CountryWrapper>
              <ReactiveList
                  componentId='SearchResult'
                  dataField='name'
                  pagination
                  showResultStats={false}
                  size={20}
                  react={{
                      and: ['RegionSensor', 'TimezoneSensor', 'SearchSensor', 'SubRegionSensor', 'CurrencySensor', 'LanguageSensor']
                  }}
                  render={({ data }) => (
                      <ReactiveList.ResultCardsWrapper>
                          {data.map((item: ICountryData) => (
                              <CountryCard data={item} key={item._id}/>
                          ))}
                      </ReactiveList.ResultCardsWrapper>
                  )}/>

          </CountryWrapper>
      </ResultWrapper>
  );
};
