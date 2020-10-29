import React from 'react'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import {DataSearch, MultiList, ReactiveList} from '@appbaseio/reactivesearch';
import {ICountryData} from '../../../../utils/types';

const Wrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const CountrySearch = styled(DataSearch) `
  margin-top: 15px;
`;
const RegionList = styled(MultiList)`
  padding: 20px;
  margin: 35px 0 20px 0;
  margin: 35px 0 20px 0;
  border: 1px solid #e2e2ea;
  border-radius: 30px;
`;
const SearchDiv = styled.div `
  display: flex;
  margin-left: 8vh;
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
const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TasksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface IOwnProps {
}

type Props = IOwnProps;

class Tasks extends React.Component<Props> {

    public render = () => {
        return (
            <Wrapper>
                <HeaderColumn>
                    <SearchDiv>
                        <CountrySearch
                            style={{'width': '99%'}}
                            title='Search'
                            componentId='SearchSensor'
                            dataField={['name', 'region', 'nativeName']}
                        />

                    </SearchDiv>
                </HeaderColumn>
                <HeaderRow>
                    <SearchDiv>
                        <RegionList
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
                    <SearchDiv>
                        <RegionList
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
                    <SearchDiv>
                        <RegionList
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
                    <SearchDiv>
                        <RegionList
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
                    <SearchDiv>
                        <RegionList
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
                </HeaderRow>
                <Teams>
                    <TasksWrapper>
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
                                        <Task data={item} key={item._id}/>
                                        ))}
                                </ReactiveList.ResultCardsWrapper>
                            )}/>

                    </TasksWrapper>
                </Teams>
            </Wrapper>
        )
    };
}

export default Tasks
