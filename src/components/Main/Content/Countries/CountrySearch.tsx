import React from 'react';
import {SearchDiv} from './index';
import styled from 'styled-components';
import {DataSearch} from '@appbaseio/reactivesearch';

const CountrySearch = styled(DataSearch) `
  margin-top: 15px;
`;
export const CountrySearchContainer = () => {
    return (
        <SearchDiv>
            <CountrySearch
                // @ts-ignore
                style={{'width': '99%'}}
                title='Search'
                componentId='SearchSensor'
                dataField={['name', 'region', 'nativeName']}
            />
        </SearchDiv>
    )
};
