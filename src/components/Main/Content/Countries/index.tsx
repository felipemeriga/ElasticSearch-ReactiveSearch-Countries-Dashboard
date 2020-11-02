import React from 'react'
import styled from 'styled-components'
import {MultiList} from '@appbaseio/reactivesearch';
import {CountrySearchContainer} from './CountrySearch';
import {SubRegionListContainer} from './SubRegionList';
import {CurrencyListContainer} from './CurrencyList';
import {RegionListContainer} from './RegionList';
import {LanguageListContainer} from './LanguageList';
import {TimezoneListContainer} from './TimezoneList';
import {ResultContainer} from './Result';

const Wrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
export const StyledMultiList = styled(MultiList)`
  padding: 20px;
  margin: 35px 0 20px 0;
  margin: 35px 0 20px 0;
  border: 1px solid #e2e2ea;
  border-radius: 30px;
`;
export const SearchDiv = styled.div `
  display: flex;
  margin-left: 5vh;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: start;
    flex-direction: row;
`;
const HeaderColumn = styled.div`
  display: flex;
  justify-content: start;
    flex-direction: column;
`;

interface IOwnProps {
}

type Props = IOwnProps;

class Countries extends React.Component<Props> {

    public render = () => {
        return (
            <Wrapper>
                <HeaderColumn>
                    <CountrySearchContainer/>
                </HeaderColumn>
                <HeaderRow>
                    <RegionListContainer/>
                    <SubRegionListContainer/>
                    <LanguageListContainer/>
                    <CurrencyListContainer/>
                    <TimezoneListContainer/>
                </HeaderRow>
                <ResultContainer/>
            </Wrapper>
        )
    };
}

export default Countries
