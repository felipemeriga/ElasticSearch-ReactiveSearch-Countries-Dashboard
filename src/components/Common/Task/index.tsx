import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Info from 'components/Common/Task/Info'
import { ITaskState } from 'store/tasks/types'
import Titles from 'components/Common/Task/Titles'
import TaskModal from 'components/Common/TaskModal'
import { getKanbanOption } from 'store/show/selectors'

const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props: ITaskProps) => !props.option && 'space-around'};
  flex-direction: ${(props: ITaskProps) => (props.option ? 'column' : 'row')};
  cursor: pointer;
  border-radius: 20px;
  padding: 15px;
  margin: 0 5px 30px 25px;
  background-color: #e0f1f9;
`;

interface ITaskProps {
  data: ITaskState
  key: string
  option: boolean
}

const Task: React.FC<ITaskProps> = props => {
  const { data } = props;

  const [modal, setModal] = React.useState<boolean>(false);

  const toggleModal = (): void => {
    setModal(prevState => !prevState)
  };

  return (
    <>
      <Wrapper
        {...props}
        onClick={toggleModal}
      >
        <Titles data={data} />
        <Info data={data} />
      </Wrapper>
      <>{modal && <TaskModal {...data} onClose={toggleModal} />}</>
    </>
  )
};
const mapStateToProps = (state: AppState) => {
  return {
    option: getKanbanOption(state)
  }
};

export default connect(mapStateToProps)(Task)
