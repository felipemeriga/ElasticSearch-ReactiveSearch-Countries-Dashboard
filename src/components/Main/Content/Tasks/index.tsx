import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { getTasks } from 'store/tasks/selectors'
import IconOval from 'components/Common/Icons/Common/Oval'
import {fetchTasks} from '../../../../store/tasks/actions';
import {ReactiveList} from '@appbaseio/reactivesearch';
import {ICountryData} from '../../../../store/countries/types';

const Wrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const StyledDiv = styled(Task) `
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TeamsTitle = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`;
const TeamsMore = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  @media (max-width: 450px) {
    display: none;
  }
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
                <Header>
                    <TeamsMore>
                        <IconOval />
                    </TeamsMore>
                </Header>
                <Teams>
                    <TasksWrapper>
                        <ReactiveList
                            componentId='SearchResult'
                            dataField='name'
                            pagination
                            showResultStats={false}
                            size={20}
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
