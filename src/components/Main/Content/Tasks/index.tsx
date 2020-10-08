import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { getTasks } from 'store/tasks/selectors'
import {fetchTasks} from '../../../../store/tasks/actions';
import {DataSearch, MultiList, ReactiveList} from '@appbaseio/reactivesearch';
import {ICountryData} from '../../../../store/countries/types';

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
  margin-left: 4vh;
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

interface IStateProps {
  tasks: ITaskState[];
  fetchTasks: typeof fetchTasks;
}

interface IDispatchProps {
    fetchTasks: () => any;
}

type Props = IStateProps & IDispatchProps;

class Tasks extends React.Component<Props> {

    componentWillMount(): void {
        const { fetchTasks } = this.props;
        fetchTasks();
    }

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
                                and: ['TimezoneSensor', 'SubRegionSensor']
                            }}
                        />
                    </SearchDiv>
                    <SearchDiv>
                        <RegionList
                            size={300}
                            showCheckbox={true}
                            componentId='SubRegionSensor'
                            dataField='subregion.keyword'
                            title='Region'
                            react={{
                                and: ['TimezoneSensor', 'RegionSensor']
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
                                and: ['RegionSensor', 'SubRegionSensor']
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
                                and: ['RegionSensor', 'TimezoneSensor', 'SearchSensor', 'SubRegionSensor']
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

const mapStateToProps = (state: AppState): {tasks: ITaskState[]} => {
  return {
    tasks: getTasks(state)
  }
};

const mapDispatchToProps = (dispatch: any): IDispatchProps => {
    return {
        fetchTasks: () => dispatch(fetchTasks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
