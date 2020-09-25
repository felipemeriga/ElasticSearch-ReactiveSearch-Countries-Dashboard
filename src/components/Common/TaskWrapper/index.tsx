import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { getKanbanOption } from 'store/show/selectors'
import Button from 'components/Common/TaskWrapper/Button'
import IconOval from 'components/Common/Icons/Common/Oval'

const variables = {
  color: '#0062ff',
  colorBorder: '#e2e2ea',
  crossSize: 16
};

const Wrapper = styled.div`
  width: ${(props: ITaskWrapperProps) => (props.option ? '280px' : 'auto')};
`;
const Header = styled.div`
  border-radius: 15px 15px 0 0;
  border-top: 1px solid ${variables.colorBorder};
  border-left: 1px solid ${variables.colorBorder};
  border-right: 1px solid ${variables.colorBorder};
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`;
const More = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  @media (max-width: 450px) {
    display: none;
  }
`;
const TasksWrapper = styled('div')`
  height: auto;
  border-left: 1px solid ${variables.colorBorder};
  border-right: 1px solid ${variables.colorBorder};
  padding: 20px 0;
`;

interface ITaskWrapperProps {
  data: ITaskState[]
  type: string
  option: boolean
}

const Tasks = (props: ITaskWrapperProps): any => {
  return props.data.map((item: ITaskState) => (
    <Task data={item} key={item.id} />
  ))
};

const TaskWrapper: React.FC<ITaskWrapperProps> = props => {
  const { type } = props;

  return (
    <Wrapper
      {...props}
    >
      <Header>
        <Title>{type}</Title>
        <More>
          <IconOval />
        </More>
      </Header>
      <TasksWrapper >
        <Tasks {...props} />
      </TasksWrapper>
      <Button />
    </Wrapper>
  )
};

const mapStateToProps = (state: AppState) => {
  return {
    option: getKanbanOption(state)
  }
};

export default connect(
  mapStateToProps,
  null
)(TaskWrapper)
